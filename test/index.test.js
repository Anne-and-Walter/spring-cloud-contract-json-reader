describe('spring-cloud-contract-json-reader', () => {
  it('should read contract test data from the designated file location', async () => {
    process.env.CONTRACT_JSON_BASE_PATH = 'test/fixtures';

    const readJsonContractFile = require('../src/index');

    const contract = await readJsonContractFile('sample-contract.json');

    expect(contract).toEqual('[{"name": "sombrero", "color": "plaid"}, {"name": "baseball cap", "color": "zebra stripe"}, {"name": "tophat", "color": "polka-dot"}]');
  });

  it('should fail a promise if it can not find contract test data', async () => {
    expect.assertions(1);
    process.env.CONTRACT_JSON_BASE_PATH = 'test/fixtures';

    const readJsonContractFile = require('../src/index');

    try {
      await readJsonContractFile('some-nonexistent-file.json');
    } catch (e) {
      expect(e).not.toBeNull();
    }
  });

  it('should fail a promise if env var "CONTRACT_JSON_BASE_PATH" is not set', async () => {
    expect.assertions(1);
    process.env.CONTRACT_JSON_BASE_PATH = undefined;

    const readJsonContractFile = require('../src/index');

    try {
      await readJsonContractFile('sample-contract.json');
    } catch (e) {
      expect(e).not.toBeNull();
    }
  });
});
