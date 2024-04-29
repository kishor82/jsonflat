import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import autoExternal from "rollup-plugin-auto-external";
import bundleSize from "rollup-plugin-bundle-size";
import path from "path";

import pkg from "./package.json" assert { type: "json" };
const outputFileName = "index";
const name = "index";
const namedInput = "index.js";
const defaultInput = "./lib/index.js";

const buildConfig = ({
  es5,
  browser = true,
  minifiedVersion = true,
  ...config
}) => {
  const { file } = config.output;
  const ext = path.extname(file);
  const basename = path.basename(file, ext);
  const extArr = ext.split(".");
  extArr.shift();

  const build = ({ minified }) => ({
    input: namedInput,
    ...config,
    output: {
      ...config.output,
      file: `${path.dirname(file)}/${basename}.${(minified
        ? ["min", ...extArr]
        : extArr
      ).join(".")}`,
    },
    plugins: [
      json(),
      resolve({ browser }),
      commonjs(),
      minified && terser(),
      minified && bundleSize(),
      ...(es5
        ? [
            babel({
              babelHelpers: "bundled",
              presets: ["@babel/preset-env"],
            }),
          ]
        : []),
      ...(config.plugins || []),
    ],
  });

  const configs = [build({ minified: false })];

  if (minifiedVersion) {
    configs.push(build({ minified: true }));
  }

  return configs;
};

export default async () => {
  const year = new Date().getFullYear();
  const banner = `// jsonflat v${pkg.version} Copyright (c) ${year} ${pkg.author} and contributors`;

  return [
    // browser ESM bundle for CDN
    ...buildConfig({
      input: namedInput,
      output: {
        file: `dist/esm/${outputFileName}.js`,
        format: "esm",
        exports: "named",
        banner,
      },
    }),

    // Browser UMD bundle for CDN
    ...buildConfig({
      input: defaultInput,
      es5: true,
      output: {
        file: `dist/${outputFileName}.js`,
        name,
        format: "umd",
        exports: "default",
        banner,
      },
    }),

    // Browser CJS bundle
    ...buildConfig({
      input: defaultInput,
      es5: false,
      minifiedVersion: false,
      output: {
        file: `dist/browser/${name}.cjs`,
        name,
        format: "cjs",
        exports: "default",
        banner,
      },
    }),

    // Node.js commonjs bundle
    {
      input: defaultInput,
      output: {
        file: `dist/node/${name}.cjs`,
        format: "cjs",
        exports: "default",
        banner,
      },
      plugins: [autoExternal(), resolve(), commonjs()],
    },
  ];
};
