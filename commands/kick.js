const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!args[0]){
    message.channel.send(new Discord.RichEmbed()
  .setDescription(":white_check_mark:**Command:** `g!kick`")
  .setColor("#36393f")
  .setThumbnail("https://cdn.discordapp.com/attachments/528279045390204928/528561272418205726/download.jpg")
  .addField("Use:", "\`\`g!kick <user> <motive>\`\`")
  .addField("Exemplos:", "\`\`g!kick @Johnn#8139 Flood\`\`\n\`g!kick 390322332021030912`")
  .addField("📛Mertifications:", "You need to have `Eject Members' permission to use this command!\n:loudspeaker: I also need permission to ban this member out!")

      ) 
     }


      let volte = args[0];
      if (!volte) return;
        avatar = message.author.avatarURL
        var usuario = message.mentions.users.first();
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(new Discord.RichEmbed()
        .setColor("#36393f")
        .setTimestamp()
        .setDescription("| You do not have permission to run this command.")).then(m => m.delete(5000)) 
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
       if(!member.kickable) 
         return message.reply(new Discord.RichEmbed()
         .setColor("#36393f")
         .setTimestamp()
         .setDescription("| I'm not allowed to punish this member, sorry.")).then(m => m.delete(5000))
         let reason = args.slice(1).join(' ');
         if(!reason) reason = "The user was púnido without putting the reason.";
         await member.kick(reason)
           .catch(error => message.reply(new Discord.RichEmbed()
           .setColor("#36393f")
           .setTimestamp()
           .setDescription(`| My bad ${message.author}, the following error occurred while attempting to perform the command: ${error}`))).then(m => m.delete(5000))
       let embed = new Discord.RichEmbed()
         .setColor("#36393f")
         .setThumbnail(message.author.avatarURL)
         .setTitle(`A user was kicked out of the server`)
         .addField(`Who threw out: ${message.author}`)
         .addField(`Expelled user: ${member.user}`)
         .addField(`ID:  ${usuario.id}`)
         .addField(`Reason: **${reason}**`)
         .setFooter("© LoveGirl | 2019", member.user.avatarURL)
         .setTimestamp();
         message.channel.send(embed)
    }


    exports.help = {
        name: 'kick'
        }