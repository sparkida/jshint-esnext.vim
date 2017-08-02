#!/usr/bin/env node

const home = require('os').homedir();
const ncp = require('ncp');
const path = require('path');
const source = path.join(__dirname);
const dest = path.join(home, '.vim', 'bundle', 'jshint-esnext.vim');
const {existsSync} = require('fs');
if (!existsSync(dest)) {
    ncp(
        source,
        dest
    );
}
