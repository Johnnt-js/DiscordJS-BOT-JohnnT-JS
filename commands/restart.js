const config = require("../config.json");

exports.run = async (client, message, args) => {
    function reiniciar(canal) {
            message.channel.send("**Reiniciando..**");
            message.delete();
      client.destroy(true);
       setTimeout(() => {
          client.login(config.token);
       return    canal.send("__**Bot reiniciado com sucesso**__");
 }, 10000);
 }
     if(message.author.id === "390322332021030912") {
         reiniciar(message.channel);
 }
 } 
 exports.help = {
    name: 'restart'
}