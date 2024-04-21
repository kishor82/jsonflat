import flatThisjson , {flatten} from "flatten-this-json";
import assert from 'assert';
import flattenThisJson from "flatten-this-json";

assert.strictEqual(typeof flattenThisJson.flatten, 'function');
assert.strictEqual(typeof flatten, 'function');

console.log("ESM importing test passed");
