#!/usr/bin/env node
var listPackageName = require('../');
var concat = require('concat-stream');
const stripJsonComments = require("strip-json-comments");

var fs = require('fs');
var file = process.argv[2];
var input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function (buf) {
    var jsonData = JSON.parse(stripJsonComments(buf.toString('utf8')));
    console.log(listPackageName(jsonData).join("\n"));
}));