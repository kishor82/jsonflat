
---

# flatten-this-json

`flatten-this-json` is a lightweight Node.js library that flattens nested JSON objects to a single level using customizable delimiters.

## Installation

You can install `flatten-this-json` via npm:

```bash
npm install flatten-this-json
```

## Usage

To flatten a nested JSON object, import the `flatten` function from `flatten-this-json` and use it as follows:

```javascript
const { flatten } = require('flatten-this-json');

const nestedObject = {
  person: {
    name: {
      first: 'John',
      last: 'Doe'
    },
    age: 30,
    address: {
      city: 'New York',
      state: 'NY'
    }
  }
};

const flattenedObject = flatten(nestedObject);

console.log(flattenedObject);
```

The `flatten` function accepts an optional `delimiter` parameter to customize the separator used in the flattened keys:

```javascript
const flattenedObject = flatten(nestedObject, '.');

console.log(flattenedObject);
```

## API

### `flatten(inputObject, delimiter = '.')`

Flattens the input JSON object to a single level.

- `inputObject` (Object): The nested JSON object to be flattened.
- `delimiter` (String): Optional. The delimiter used to separate keys in the flattened output. Default is `'.'`.

Returns: A new object with flattened keys.

## Examples

### Flatten Nested JSON Object

```javascript
const { flatten } = require('flatten-this-json');

const nestedObject = {
  person: {
    name: {
      first: 'John',
      last: 'Doe'
    },
    age: 30,
    address: {
      city: 'New York',
      state: 'NY'
    }
  }
};

const flattenedObject = flatten(nestedObject);

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

