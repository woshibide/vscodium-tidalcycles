import * as path from 'path';
import { runTests } from '@vscode/test-electron';

async function main() {
    try {
        // the folder containing the extension manifest package.json
        // passed to `--extensionDevelopmentPath`
        const extensionDevelopmentPath = path.resolve(__dirname, '../');

        // the path to test runner
        // passed to --extensionTestsPath
        const extensionTestsPath = path.resolve(__dirname, './suite/index');

        // download vscode, unzip it and run the integration test
        await runTests({ extensionDevelopmentPath, extensionTestsPath });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();