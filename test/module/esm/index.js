import assert from 'assert';
import flattenThisJson, {flatten} from "flatten-this-json";

assert.strictEqual(typeof flattenThisJson.flatten, 'function');
assert.strictEqual(typeof flatten, 'function');

console.log("✅ ESM importing test passed");
