#!/usr/bin/env node
const { listPackageNames } = require('../lib/textlintrc-to-pacakge-list.js');
const concat = require('concat-stream');
const stripJsonComments = require("strip-json-comments");

const fs = require('fs');
const file = process.argv[2];
const input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function (buf) {
    const jsonData = JSON.parse(stripJsonComments(buf.toString('utf8')));
    console.log(listPackageNames(jsonData).join("\n"));
}));
