const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
    message.delete();
    if (reason.length < 1) return message.reply('Cite um nick de minecraft!');

    let embed = new Discord.RichEmbed()

    .setImage(`https://mc-heads.net/body/${args[0]}`)
    .setTimestamp()
    .setTitle(`${args[0]}`)
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL)
    .setColor("#36393f")
    message.delete();
    message.channel.send(embed);
}
