require("dotenv").config();
const {Client, Intents} = require("discord.js");
const client = new Client{{
    Intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
}};
client.once("ready", () => {
    console.log("BOT IS ONLINE");
})
client.login(process.env.TOKEN);