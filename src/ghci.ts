import { ChildProcess, spawn } from 'child_process';
import { ILogger } from './logging';
import * as vscode from 'vscode';
import * as split2 from 'split2';
import { EOL } from 'os';
import { Stream } from 'stream';

/**
 * Provides an interface for sending commands to a GHCi session.
 */
export interface IGhci {
    writeLn(command: string): void;
}

export class Ghci implements IGhci {
    private ghciProcess: ChildProcess | null = null;
    public readonly stdout: Stream = new Stream();
    public readonly stderr: Stream = new Stream();

    constructor(
        private logger: ILogger,
        private useStack: boolean,
        private ghciPath: string,
        private showGhciOutput: boolean) {
    }

    private getGhciProcess(): ChildProcess {
        if (this.ghciProcess !== null) {
            return this.ghciProcess;
        }

        if (this.useStack) {
            var stackOptions = ['--silent', 'ghci', '--ghci-options', '-XOverloadedStrings'];
            if (!this.showGhciOutput) {
                stackOptions.push('--ghci-options', '-v0');
            }
            this.ghciProcess = spawn('stack', stackOptions,
                {
                    cwd: vscode.workspace.rootPath
                });
        } else {
            var ghciOptions = ['-XOverloadedStrings'];
            if (!this.showGhciOutput) {
                ghciOptions.push('-v0');
            }
            this.ghciProcess = spawn(this.ghciPath, ghciOptions,
                {
                    cwd: vscode.workspace.rootPath
                });
        }

        this.ghciProcess.stderr?.pipe(split2()).on('data', (data: any) => {
            this.stderr.emit('data', data);
        });
        this.ghciProcess.stdout?.on('data', (data: any) => {
            this.stdout.emit('data', data);
        });
        return this.ghciProcess;
    }

    private write(command: string) {
        try {
            let ghciProcess = this.getGhciProcess();
            if (ghciProcess.stdin) {
                ghciProcess.stdin.write(command);
            } else {
                this.logger.error('GHCi process stdin is not available');
            }
        } catch (e) {
            this.logger.error(`Failed to get GHCi process: ${e}`);
            return;
        }
    }

    public writeLn(command: string) {
        this.write(`${command}${EOL}`);
    }
}