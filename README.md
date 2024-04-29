[![NPM Version](https://img.shields.io/npm/v/@kishor82/jsonflat)](https://www.npmjs.com/package/@kishor82/jsonflat)
[![Build status](https://img.shields.io/github/actions/workflow/status/kishor82/jsonflat/unit-tests-cli.yml)](https://github.com/kishor82/jsonflat/actions/workflows/unit-tests-cli.yml)
[![Coverage Status](https://coveralls.io/repos/github/kishor82/jsonflat/badge.svg)](https://coveralls.io/github/kishor82/jsonflat)

---

# jsonflat

`jsonflat` is a lightweight Node.js library that flattens nested JSON objects to a single level using customizable delimiters.

## Installation

You can install `jsonflat` via npm:

```bash
npm install @kishor82/jsonflat
```

## Usage

To flata nested JSON object, import the `flat` function from `jsonflat` and use it as follows:

```javascript
const { flat } = require("@kishor82/jsonflat");

const nestedObject = {
  person: {
    name: {
      first: "John",
      last: "Doe",
    },
    age: 30,
    address: {
      city: "New York",
      state: "NY",
    },
  },
};

const flattenedObject = flat(nestedObject);

console.log(flattenedObject);
```

The `flat` function accepts an optional `delimiter` parameter to customize the separator used in the flattened keys:

```javascript
const flattenedObject = flat(nestedObject, ".");

console.log(flattenedObject);
```

## API

### `flat(inputObject, delimiter = '.')`

Flattens the input JSON object to a single level.

- `inputObject` (Object): The nested JSON object to be flattened.
- `delimiter` (String): Optional. The delimiter used to separate keys in the flattened output. Default is `'.'`.

Returns: A new object with flattened keys.

## Examples

### flatNested JSON Object

```javascript
const { flat } = require("@kishor82/jsonflat");

const nestedObject = {
  person: {
    name: {
      first: "John",
      last: "Doe",
    },
    age: 30,
    address: {
      city: "New York",
      state: "NY",
    },
  },
};

const flattenedObject = flat(nestedObject);

console.log(flattenedObject);
```

Output:

```json
{
  "person.name.first": "John",
  "person.name.last": "Doe",
  "person.age": 30,
  "person.address.city": "New York",
  "person.address.state": "NY"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
