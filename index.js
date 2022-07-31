// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./config.json');
const botId = '1003351783525073026';
const client = new Client({
	intents: [
	  GatewayIntentBits.DirectMessages,
	  GatewayIntentBits.Guilds,
	  GatewayIntentBits.GuildBans,
	  GatewayIntentBits.GuildMessages,
	  GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Channel],
  });

client.on("ready", () => {
	console.log("Ready!");
});

client.on('messageCreate', async (message) => {
	console.log(message);
	if(message.author.id === '566724468488011818'){
		message.channel.send("Shut up mall boy");
	}
});

// Login to Discord with your client's token
client.login(token);