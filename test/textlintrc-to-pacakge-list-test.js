// LICENSE : MIT
"use strict";
import assert from "power-assert"
import fs from "fs";
import listPackageNames from "../src/textlintrc-to-pacakge-list";
describe("textlintrc-to-pacakge-list", function () {
    it("should return package name list", function () {
        var config = require("./fixtures/.textlintrc.json");
        var names = listPackageNames(config);
        assert.deepEqual(names, [
            "textlint-plugin-jtf-style",
            "textlint-filter-rule-comments",
            "textlint-rule-max-ten",
            "textlint-rule-no-doubled-joshi",
            "textlint-rule-sentence-length",
            "textlint-rule-no-start-duplicated-conjunction",
            "textlint-rule-spellcheck-tech-word",
            "textlint-rule-no-mix-dearu-desumasu",
            "textlint-rule-prh"
        ]);
    });
});