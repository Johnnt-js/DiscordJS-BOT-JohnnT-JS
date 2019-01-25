const Discord = require('discord.js');
const config = require("./config.json");
const db = require('quick.db');

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
  console.log("Bot iniciado com sucesso.")
  setInterval(() => {
    let a = ["Stats 1", "Stats 2", "Stats 3"];
    let b = a[Math.floor(Math.random() * a.length)];
    client.user.setActivity(b, { type: "STREAMING", } );
    }, 10000);
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;

  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  } finally {}

});

client.login(config.token);
