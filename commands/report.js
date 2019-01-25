const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete();
    let rUser = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0])
    if (!rUser) return message.channel.send("Eu não encontrei este usuário."); 
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("Você não colocou um motivo.")
  
    let reportEmbed = new Discord.RichEmbed()
    .setTitle("**Reports**")
    .setColor("#36393f")
    .addField("Usuário reportado:", `${rUser}`)
    .addField("Reportado por:", `${message.author}`)
    .addField("Motivo:", reason);

    message.channel.send(`**Obrigado por reportar, nossa equipe analisará, tenha um bom dia** ${message.author}.`)
    let canal = message.guild.channels.find(ch => ch.name == '💢│spam-bots');
    canal.send(reportEmbed);
  }


  exports.help = {
    name: "report"
}
