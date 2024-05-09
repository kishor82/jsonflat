import fs from 'fs';
import readline from 'readline';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const viersionToRelease = pkg.version;
const eol = '\n'
const encoding = "utf8";

async function extractReleaseNotes(changelogFile, prerelease) {
  const fileStream = fs.createReadStream(changelogFile, { encoding: encoding });
  const rl = readline.createInterface({
    input: fileStream,
  });
  const lines = [];
  let inside_release = false;
  for await (const line of rl) {
    const regex = /\[?(\d+\.\d+\.\d+-\w+\.\d+)\]?/;

    const match = line.match(regex);

    if (match) {
      const version = match[1]; // Extract version number
      if(version === viersionToRelease) {
        lines.push(`## Release notes:`);
      }
      if (inside_release) {
        break;
      }
      inside_release = true;
    } else {
      if(inside_release){
        lines.push(line);
      }
    }
  }

  let releaseNotes = "-";

  if (lines.length) {
    releaseNotes = lines.reduce(
      (previousValue, currentValue) => previousValue + eol + currentValue,
    );
  }
  return releaseNotes;
}

console.log(await extractReleaseNotes("CHANGELOG.md",false));

