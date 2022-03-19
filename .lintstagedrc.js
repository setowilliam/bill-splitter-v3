const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  filenames.map((f) => `prettier --write ${path.relative(process.cwd(), f)}`);

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{js,css,md,ts,tsx,html}": buildPrettierCommand,
};
