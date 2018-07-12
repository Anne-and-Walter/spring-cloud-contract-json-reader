describe('spring-cloud-contract-json-reader', () => {
  it('should read contract test data from the designated file location', async () => {
    process.env.CONTRACT_JSON_BASE_PATH = 'test/fixtures';

    const readJsonContractFile = require('../src/index');

    const contract = await readJsonContractFile('sample-contract.json');

    expect(contract).toEqual('[{"name": "sombrero", "color": "plaid"}, {"name": "baseball cap", "color": "zebra stripe"}, {"name": "tophat", "color": "polka-dot"}]');
  });
});
