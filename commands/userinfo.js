const Discord = require('discord.js');
const moment = require('moment');
moment.locale("en");

exports.run = async (client, message, args) => {
//modulo.exports.run = (client,message,args) = {
//
//}

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
   
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const moment = require('moment');
    moment.locale("pt-BR");

    let gAvatar = message.guild.iconIRL;
    let embed = new Discord.RichEmbed()

    .setColor("#36393f")
    .setThumbnail(message.author.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'Esse usuário usou a função de "Nickname".'}`, true)
    .addField("Conta criada em:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game", `${user.presence.game ? user.presence.game.name : 'Não está jogando nenhum jogo!'}`, true)
    .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '),true)
    .setFooter("© LoveGirl | 2019", client.user.displayAvatarURL);
    message.channel.send({embed})
}

exports.help = {
    name: "userinfo"
}
