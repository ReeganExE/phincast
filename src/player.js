const chromecasts = require('chromecasts')();
const chalk = require('chalk');
const pbh = require('./pbh');

var player;

console.log('Scanning devices...');

chromecasts.on('update', function (_player) {
    player = _player;
    console.log(chalk.yellow('Detected: '), chalk.green(`${player.name} TV on ${player.host}`));

    player.on('status', function (status) {
        console.log(chalk.yellow('Status:'), 'broadcast playerState=', status.playerState, status.currentTime);
    });
});

function playOnAvailable(url) {
    console.log(chalk.green(`Streaming to ${player.name} TV:`), url.substr(0, 55) + '...');
    player.play(url, {
        title: 'my video', type: 'video/mp4',
        images: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg']
    })
}

module.exports = {
    playOnAvailable
}