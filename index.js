// Directories are not valid import targets in ESM unless they have an explicit entry point defined.
import jsonflat from "./lib/index.js";

const { flat } = jsonflat;

// https://github.com/rollup/rollup/issues/1961#issuecomment-618345638
export { jsonflat as default, flat };
