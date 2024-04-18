import { flatten } from '.'; 

describe('flatten', () => {
  // Test case for flattening a simple object
  it('flattens a simple object', () => {
    const data = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    };
    const expected = {
      name: 'John',
      age: 30,
      'address.city': 'New York',
      'address.country': 'USA',
    };
    expect(flatten(data)).toEqual(expected);
  });

  // Test case for flattening an empty object
  it('returns an empty object for an empty input', () => {
    const data = {};
    const expected = {};
    expect(flatten(data)).toEqual(expected);
  });

  // Test case for flattening an object with nested arrays
  it('flattens an object with nested arrays', () => {
    const data = {
      user: {
        name: 'Alice',
        hobbies: ['Reading', 'Cooking'],
      },
    };
    const expected = {
      'user.name': 'Alice',
      'user.hobbies.0': 'Reading',
      'user.hobbies.1': 'Cooking',
    };
    expect(flatten(data)).toEqual(expected);
  });

  // Test case for flattening an object with custom delimiter
  it('flattens an object with custom delimiter', () => {
    const data = {
      name: 'John',
      age: 30,
      address: {
        city: 'New York',
        country: 'USA',
      },
    };
    const expected = {
      name: 'John',
      age: 30,
      'address|city': 'New York',
      'address|country': 'USA',
    };
    expect(flatten(data, '|')).toEqual(expected);
  });

  // Test case for flattening an object with null values
  it('flattens an object with null values', () => {
    const data = {
      name: 'John',
      age: null,
      address: {
        city: 'New York',
        country: null,
      },
    };
    const expected = {
      name: 'John',
      age: null,
      'address.city': 'New York',
      'address.country': null,
    };
    expect(flatten(data)).toEqual(expected);
  });
});
