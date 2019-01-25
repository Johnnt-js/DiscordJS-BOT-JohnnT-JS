const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
    message.delete();
const broadcast= args.join(" ");
    message.channel.send(broadcast);
}

exports.help = {
    name: "say"
}