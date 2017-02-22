var chromecasts = require('chromecasts')();

chromecasts.on('update', function (player) {
    //   console.log('all players: ', chromecasts.players)
    player.on('status', function (status) {
        console.log('status broadcast playerState=%s', status.playerState, status.currentTime);
    });

    player.play('https://redirector.googlevideo.com/videoplayback?id=49ffa2cc9d5c0ba7&itag=37&source=webdrive&requiressl=yes&ttl=transient&mm=30&mn=sn-i3b7knel&ms=nxu&mv=u&pl=48&mime=video/mp4&lmt=1487165545274985&mt=1487725560&ip=2001:ee0:305:1::14&ipbits=128&expire=1487740162&sparams=ip,ipbits,expire,id,itag,source,requiressl,ttl,mm,mn,ms,mv,pl,mime,lmt&signature=B95909A98F6FE36460108C3B72F5A20B85B32E.9DA1D96BDA0B77623BD788750CF31EA5A422909F&key=ck2&app=explorer',
        {
            title: 'my video', type: 'video/mp4',
            images: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg']
        })
})