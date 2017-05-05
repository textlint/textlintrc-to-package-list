// LICENSE : MIT
"use strict";
import fs from "fs";
import path from "path";
import assert from "assert"
import listPackageNames from "../src/textlintrc-to-pacakge-list";
function normalize(str) {
    return str.replace(/^\s+|\s+$/, '').replace(/\r?\n/g, '\n');
}
const fixturesDir = path.join(__dirname, 'fixtures');
describe("textlintrc-to-pacakge-list", function() {
    fs.readdirSync(fixturesDir).map((caseName) => {
        it(`should generate assertions for ${caseName.replace(/-/g, ' ')}`, () => {
            const fixtureDir = path.join(fixturesDir, caseName);
            const actualPath = path.join(fixtureDir, '.textlintrc.json');
            const expectedPath = path.join(fixtureDir, 'output.json');
            const config = require(actualPath);
            const names = listPackageNames(config);
            const expected = require(expectedPath);
            assert.deepEqual(names, expected);
        });
    });
});