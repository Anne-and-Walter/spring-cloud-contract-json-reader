const util = require('util');

const getTrimmedRepoRoot = async () => {
  const execPromisified = util.promisify(require('child_process').exec);

  const getRepoRootCommand = 'git rev-parse --show-toplevel';
  const repoRootPathWithNewlines = await execPromisified(getRepoRootCommand);
  const trimmedRepoRootPath = repoRootPathWithNewlines.stdout.replace('\n', '');

  return trimmedRepoRootPath;
};

const readJsonContractFile = async (filename) => {
  const readFilePromisified = util.promisify(require('fs').readFile);

  const repoRoot = await getTrimmedRepoRoot();

  if (!process.env.CONTRACT_JSON_BASE_PATH) {
    throw new Error('Expected environment variable CONTRACT_JSON_BASE_PATH to be set');
  }

  const jsonContractFile = await readFilePromisified(
    [
      repoRoot,
      process.env.CONTRACT_JSON_BASE_PATH,
      filename,
    ].join('/')
  );

  return JSON.parse(jsonContractFile).response.body;
};

module.exports = readJsonContractFile;
