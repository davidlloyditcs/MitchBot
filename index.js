// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token, mitchellId, davId, testGeneralChat} = require('./config.json');
const messages = require('./riot-api/src/messages.json');

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

//We can utilize this to catch whenever someone sends a message in a discord that MitchBot is in.
client.on('messageCreate', async (message) => {
	/*
	console.log(message);
	if(message.author.id === davId){
		message.channel.send("Testing");
	}
	*/
});

//Utilize the deathcount passed over in eventPoller to know which message we should grab from messages.json
function callMitchellBad(deathCount) {
	if(deathCount <= 9) {
		client.channels.cache.get(testGeneralChat).send(messages[deathCount-1].message);
	}
}

// Login to Discord with your client's token
client.login(token);

module.exports = { callMitchellBad };