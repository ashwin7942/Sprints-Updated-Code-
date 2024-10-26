const { exec } = require('child_process');

exports.runTests = async (testType) => {
    return new Promise((resolve, reject) => {
        const testFolder = testType === 'unit' ? './test/unit' :
                          testType === 'integration' ? './test/integration' : './test/e2e';
        exec(`npm test ${testFolder}`, (error, stdout, stderr) => {
            if (error) {
                reject(`Test error: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
};
