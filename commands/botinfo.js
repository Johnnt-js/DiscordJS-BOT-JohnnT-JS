const Discord = require('discord.js')

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()

    .setColor("#36393f")
    .setAuthor("Information (BOT)", client.user.avatarURL)
    .setDescription("BOT")
    .addField(":desktop: Servidores que eu estou:", + client.guilds.size, true)
    .addField(":joystick: Linguagem:", " JavaScript", + true)
    .addField(":owl: Crriador do bot:", "client = new Discord.Client();#8139 ", true)
    .addField(":bust_in_silhouette: Versão do bot: ", "v1.2.0", true)
    .addField(":knife: ID: ", "531196365586432004", true)
    .addField(":flag_br: País:", "Brasil ", true)
    .addField(":heart: Estou hospedado em:", " Glitch", + true)
    .addField(":bookmark: Library", " discord.js", true)
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(embed);
}

exports.help = {
    name: "botinfo"
}
