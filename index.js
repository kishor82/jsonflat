import flattenThisJson from "./lib";

const { flatten } = flattenThisJson;

// https://github.com/rollup/rollup/issues/1961#issuecomment-618345638
export {
  flattenThisJson as default,
  flatten
}
