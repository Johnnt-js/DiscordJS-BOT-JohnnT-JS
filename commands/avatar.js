const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .setImage(user.displayAvatarURL)
    .setColor("#36393f")
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL)
    .setTimestamp();
  
  message.channel.send(embed);
}

exports.help = {
    name: "avatar"
}
