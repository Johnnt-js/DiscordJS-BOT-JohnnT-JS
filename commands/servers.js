const Discord = require('discord.js');
const ownerID = '390322332021030912';
exports.run = async (client, message, args) => {
    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    let string = '';

    client.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#36393f")
        .addField("Servidores que eu estou: :heart: ", string)
        .setTimestamp()
        .setFooter("© Universe Community | 2019", client.user.displayAvatarURL);
    message.channel.send(botembed);
}
exports.help = {
    name: "servers"
}