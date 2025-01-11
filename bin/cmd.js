#!/usr/bin/env node
import { listPackageNames } from "../src/textlintrc-to-pacakge-list.js";
import concat from "concat-stream";
import stripJsonComments from "strip-json-comments";
import fs from "node:fs";

const file = process.argv[2];
const input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function (buf) {
    const jsonData = JSON.parse(stripJsonComments(buf.toString('utf8')));
    console.log(listPackageNames(jsonData).join("\n"));
}));
