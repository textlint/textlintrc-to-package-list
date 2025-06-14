// LICENSE : MIT
"use strict";
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert"
import { describe, it } from "node:test";
import stripJsonComments from "strip-json-comments";
import { listPackageNames } from "../src/textlintrc-to-package-list.js";

const fixturesDir = path.join(import.meta.dirname, 'fixtures');
describe("textlintrc-to-package-list", () => {
    fs.readdirSync(fixturesDir)
        .forEach(caseName => {
            const normalizedTestName = caseName.replace(/-/g, " ");
            it(`Test ${normalizedTestName}`, async function () {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualFilePath = path.join(fixtureDir, ".textlintrc.json");
                const actualContent = JSON.parse(stripJsonComments(fs.readFileSync(actualFilePath, "utf-8")));
                const actualResults = listPackageNames(actualContent);
                const expectedFilePath = path.join(fixtureDir, "output.json");
                // Usage: update snapshots
                // UPDATE_SNAPSHOT=1 npm test
                if (!fs.existsSync(expectedFilePath) || process.env.UPDATE_SNAPSHOT) {
                    fs.writeFileSync(expectedFilePath, JSON.stringify(actualResults, null, 4));
                    this.skip(); // skip when updating snapshots
                    return;
                }
                // compare input and output
                const expectedContent = JSON.parse(fs.readFileSync(expectedFilePath, "utf-8"));
                assert.deepStrictEqual(
                    actualResults,
                    expectedContent
                );
            });
        });
});

