const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.member.hasPermission("ADMINISTRATOR")) {


const embed = new Discord.RichEmbed()
  .setColor("#36393f")
  .setTitle("ANÚNCIO")
  .setDescription(args.join(" "))
  .setFooter("© NomeDoSeuBOT | 2019", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send("@everyone")
  message.channel.send(embed);
  message.delete()
  }
}

exports.help = {
    name: "announce"
}
