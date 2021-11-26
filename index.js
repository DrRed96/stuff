const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", message => {
    message.channel.send(`<@${message.author.id}> I hate you`);
});

client.login("isadiausdiouasdouiasd");
