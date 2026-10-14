const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");

// Waits about 4 minutes so a build stays open long enough for the interference tests (I3-I7).
test("README exists", { timeout: 300000 }, async () => {
  await new Promise((resolve) => setTimeout(resolve, 240000));
  assert.ok(fs.existsSync("README.md"));
});
