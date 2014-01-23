var irc = require('irc');
var config = require(path.join('config','config.json'));

// var config = {
//     channels: ["#tainthorse"],
//     server: "irc.freenode.net",
//     botName: "horsie"
// };

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('join', function(channel, who) {
    bot.say(channel, who + ", sup homie, what's poppin?");
});

bot.addListener("message", function(from, to, text, message) {
    bot.say(from, "What mang?");
});
