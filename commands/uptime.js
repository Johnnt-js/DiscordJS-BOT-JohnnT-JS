const Discord = require("discord.js");

const moment = require("moment");

exports.run = async (client, message, args) =>{

        const duration = moment.duration(client.ontime)

        let u = convertMS(client.uptime);
        let ontime = `**${u.h}**` + " Hora(s) " + `**${u.m}**` + " Minuto(s) e " + `**${u.s}**` + " Segundo(s)"

  const online = new Discord.RichEmbed()
    .setColor("#36393f")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .addField("Tempo do bot online 🚀 Universe Community:", `${message.author}, Estou online á: ${ontime}`, true)
    .setFooter("© Universe Community | 2019", client.user.displayAvatarURL)
    
    message.channel.send({embed: online});


function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
}


exports.help = {
    name: "uptime"
}