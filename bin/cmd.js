#!/usr/bin/env node
var listPackageName = require('../');
var concat = require('concat-stream');
var fs = require('fs');
var file = process.argv[2];
var input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function (buf) {
    var jsonData = JSON.parse(buf.toString('utf8'));
    console.log(listPackageName(jsonData).join("\n"));
}));