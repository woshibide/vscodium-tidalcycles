import * as path from 'path';
import * as Mocha from 'mocha';
import { glob } from 'glob';

export function run(): Promise<void> {
    // create the mocha test
    const mocha = new Mocha({
        ui: 'tdd',
        color: true,
        timeout: 10000
    });

    const testsRoot = path.resolve(__dirname, '..');

    return new Promise((resolve, reject) => {
        glob('**/**.test.js', { cwd: testsRoot })
            .then((files: string[]) => {
                // add files to the test suite
                files.forEach((f: string) => mocha.addFile(path.resolve(testsRoot, f)));

                try {
                    // run the mocha test
                    mocha.run(failures => {
                        if (failures > 0) {
                            reject(new Error(`${failures} tests failed.`));
                        } else {
                            resolve();
                        }
                    });
                } catch (err: any) {
                    console.error(err);
                    reject(err);
                }
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}
