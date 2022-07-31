require("dotenv").config();
const Discord = require('discord.js');
const client = new Client({intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on("ready", () => {
    console.log("BOT IS ONLINE");
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.login(process.env.DISCORD_TOKEN);