// Directories are not valid import targets in ESM unless they have an explicit entry point defined.
import flattenThisJson from "./lib/index.js";

const { flatten } = flattenThisJson;

// https://github.com/rollup/rollup/issues/1961#issuecomment-618345638
export {
  flattenThisJson as default,
  flatten
}
