var irc = require('irc')
    , path = require('path')
    , config = require(path.join(__dirname, 'config', 'config.json'))
    , log = console.log
    ;

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('join', function(channel, who) {
    var msg = who + ", up homie";
    bot.say(channel, msg);
    log(msg);
});
