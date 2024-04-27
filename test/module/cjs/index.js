const flattenThisJson = require("flatten-this-json");
const assert = require('assert');

const { flatten } = flattenThisJson;

assert.strictEqual(typeof flatten, 'function');

console.log('✅ CommonJS importing test passed');
