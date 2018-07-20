# JavaScript Spring Cloud Contract JSON Reader 🎆

Read Spring Cloud Contract JSON directly in your consumer contract tests and banish magic numbers once and for all! 😱

## Install 🚚

```$xslt
npm install spring-cloud-contract-json-reader
```

or

```$xslt
yarn install spring-cloud-contract-json-reader
```

## Usage 🤹

1. Set environment variable ```CONTRACT_JSON_BASE_PATH``` to wherever your contract test json is located relative to the root of your project's git repository. 
E.g.: ```build/stubs/META-INF/com.somepackage/myfancyapp/0.0.1-SNAPSHOT/mappings```

**Note**: No need for leading or trailing slashes.

2. Import the Spring Cloud Contract JSON Reader into your tests and start asserting on response body data!
```$xslt
const readJsonContractFile = require('spring-cloud-contract-json-reader');

const contractResponseBody = await readJsonContractFile('shouldReturnListOfSuperheroes.json');

const response = await axios.fetch('http://my-api/some-endpoint');

expect(response.data).toEqual(contractResponseBody);
```

## Running Unit Tests ⚙

This library includes its own test suite.
You'll need to install testing dependencies before you can run the tests:
```$xslt
npm install
```

After that's done, just run the tests with:
```$xslt
npm test
```

## License 📃
MIT
