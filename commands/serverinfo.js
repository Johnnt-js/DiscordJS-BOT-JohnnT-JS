const Discord = require("discord.js");
const moment = require("moment"); // npm install moment
moment.locale("en");

exports.run = (client, message, args) => {
//modulo.exports.run = (client,message,args) = {
//
//}
    let gAvatar = message.guild.iconIRL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor("#36393f")
    .setDescription(`Algumas informações de: ${message.guild.name}!`)
    .addField(`ID do servidor`, message.guild.id, true)
    .addField(`Fundador do servidor`, message.guild.owner, true)
    .addField(`Região do servidor`, message.guild.region, true)
    .addField(`Texto de voz/canais`, message.guild.channels.size, true)
    .addField(`Data em que o servidor foi criado`, moment(message.guild.createdAt))
    .addField(`Você veio aqui em:`, moment(message.member.joinedAt))
    .addField(`Total de membros`, message.guild.memberCount)
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL);

    message.channel.send(embed);
}

exports.help = {
    name: "serverinfo"
}

