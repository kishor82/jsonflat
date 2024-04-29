import assert from "assert";
import jsonflat, { flat } from "jsonflat";

assert.strictEqual(typeof jsonflat.flat, "function");
assert.strictEqual(typeof flat, "function");

console.log("✅ ESM importing test passed");
