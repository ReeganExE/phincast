var jsdom = require("jsdom");
var GibberishAES = require('gibberish-aes/src/gibberish-aes');
var needle = require('needle');
var Config = require('./config');

var passcode = Config.passcode;

needle.get('http://phimbathu.com/xem-phim/phim-loi-thinh-cau-quai-vat-a-monster-calls-2016-6533', function (error, response) {
    if (!error && response.statusCode == 200) {
        let json = JSON.parse(response.body.match(/var playerSetting = (.*?)};/)[1] + '}');
        let sources = json.sources.map(s => {
            s.file = GibberishAES.dec(s.file, passcode + json.modelId);
            return s;
        });
        console.log(sources);
    }
});