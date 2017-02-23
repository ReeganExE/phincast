#!/usr/bin/env node
const yargs = require('yargs').argv;
const chalk = require('chalk');

const pbh = require('./pbh');
const player = require('./player');

if (yargs._.length) {
    pbh(yargs._[0]).then(sources => {
        let file = sources[0].file;
        player.playOnAvailable(file);
    }).catch(err => {
        console.error(err);
    });
}
