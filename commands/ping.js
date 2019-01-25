exports.run = async (client, message, args) => {
    const m = await message.channel.send("Calculando...");
    m.edit(`Pong! :ping_pong:\nLatency é **[${m.createdTimestamp - message.createdTimestamp}]**ms.<a:ping:512065320320761867>\nAPI Latency é **[${Math.round(client.ping)}]**ms. <a:ping:512065320320761867>`);
  }

exports.help = {
    name: "ping"
}