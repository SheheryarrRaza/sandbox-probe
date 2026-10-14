// Writes environment variable NAMES only (never values) so test I1 can see what the install step receives.
const fs = require("fs");
const names = Object.keys(process.env).sort();
fs.writeFileSync("probe-env.txt", names.join("\n") + "\n");
