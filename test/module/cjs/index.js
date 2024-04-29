const jsonflat = require("jsonflat");
const assert = require("assert");

const { flat } = jsonflat;

assert.strictEqual(typeof flat, "function");

console.log("✅ CommonJS importing test passed");
