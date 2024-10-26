const testRunner = require('../utils/testRunner');

exports.runUnitTests = async (req, res) => {
    try {
        const result = await testRunner.runTests('unit');
        res.status(200).json({ message: 'Unit tests executed', result });
    } catch (err) {
        res.status(500).json({ message: 'Error running unit tests', error: err });
    }
};

exports.runIntegrationTests = async (req, res) => {
    try {
        const result = await testRunner.runTests('integration');
        res.status(200).json({ message: 'Integration tests executed', result });
    } catch (err) {
        res.status(500).json({ message: 'Error running integration tests', error: err });
    }
};

exports.runE2ETests = async (req, res) => {
    try {
        const result = await testRunner.runTests('e2e');
        res.status(200).json({ message: 'E2E tests executed', result });
    } catch (err) {
        res.status(500).json({ message: 'Error running E2E tests', error: err });
    }
};
