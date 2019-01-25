const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!args[0]){
    message.channel.send(new Discord.RichEmbed()
  .setDescription(":white_check_mark:**Comando:** `g!banir`")
  .setColor("#36393f")
  .setThumbnail("https://cdn.discordapp.com/attachments/528279045390204928/528561272418205726/download.jpg")
  .addField("Use:", "\`\`g!kick <user> <motive>\`\`")
  .addField("Exemplos:", "\`\`g!banir @Johnn#8139 Flood\`\`\n\`g!banir 390322332021030912`")
  .addField("📛Permissão:", "Você precisa ter `BAN_MEMBERS' permissão para usar este comando!\n:loudspeaker: Eu também preciso de permissão para expulsar esse membro!")

      ) 
     } 


      let volte = args[0];
      if (!volte) return;
        avatar = message.author.avatarURL
        var usuario = message.mentions.users.first();
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(new Discord.RichEmbed()
        .setColor("#36393f")
        .setTimestamp()
        .setDescription("| Você não tem permissão para executar este comando.")).then(m => m.delete(5000)) 
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
       if(!member.kickable) 
         return message.reply(new Discord.RichEmbed()
         .setColor("#36393f")
         .setTimestamp()
         .setDescription("| Eu não tenho permissão para punir esse membro, desculpe.")).then(m => m.delete(5000))
         let reason = args.slice(1).join(' ');
         if(!reason) reason = "O usuário foi púnido sem colocar o motivo.";
         await member.kick(reason)
           .catch(error => message.reply(new Discord.RichEmbed()
           .setColor("#36393f")
           .setTimestamp()
           .setDescription(`| Minha culpa ${message.author}, Ocorreu o seguinte erro ao tentar executar o comando: ${error}`))).then(m => m.delete(5000))
       let embed = new Discord.RichEmbed()
         .setColor("#36393f")
         .setThumbnail(message.author.avatarURL)
         .setTitle(`Um usuário foi banido do servidor`)
         .addField(`Quem baniu ${message.author}`)
         .addField(`Usuário banido: ${member.user}`)
         .addField(`ID:  ${usuario.id}`)
         .addField(`Motivo: **${reason}**`)
         .setTimestamp()
         .setFooter("© Universe Community | 2019", member.user.avatarURL);
         message.channel.send(embed)

    }


    exports.help = {
        name: 'kick'
        }