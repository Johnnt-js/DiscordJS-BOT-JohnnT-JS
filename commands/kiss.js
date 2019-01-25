const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let status = [`https://cdn.discordapp.com/attachments/509498624367919132/529303610811482142/DfiCkFn.gif `, "https://cdn.discordapp.com/attachments/509498624367919132/529303610811482142/DfiCkFn.gif", 'https://cdn.discordapp.com/attachments/509498624367919132/529303610811482142/DfiCkFn.gif', `https://cdn.discordapp.com/attachments/509498624367919132/529303610811482142/DfiCkFn.gif`, "https://cdn.discordapp.com/attachments/509498624367919132/529303610811482142/DfiCkFn.gif"]
    let random = status[Math.floor(Math.random() * status.length)]
 if(message.mentions.users.size < 1) return message.reply("**Você precisa mencionar alguém.**")
    let user = message.mentions.users.first()
 if(user.id == message.author.id) return message.channel.send("`Você não pode se beijar.`")
    let botembed = new Discord.RichEmbed()
    .setDescription(`| ${message.author} deu um beijo em ${user}`)
    .setColor("#36393f")
    .setImage(`${random}`)
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL)
message.channel.send(botembed);
  }
exports.help = {
    name: "kiss"
}