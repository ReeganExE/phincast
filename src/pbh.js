var jsdom = require("jsdom");
var GibberishAES = require('gibberish-aes/src/gibberish-aes');
var needle = require('needle');
var Config = require('./config');
const chalk = require('chalk');

var passcode = Config.passcode;

module.exports = function(url) {
    console.log(chalk.green('Loading...'), url);

    return new Promise((resolve, reject) => {
        needle.get(url, function (error, response) {
            if (!error && response.statusCode == 200) {
                let json = JSON.parse(response.body.match(/var playerSetting = (.*?)};/)[1] + '}');
                let sources = json.sources.map(s => {
                    s.file = GibberishAES.dec(s.file, passcode + json.modelId);
                    return s;
                });
                return resolve(sources);
            }
            reject(error);
        });
    });
};