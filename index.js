const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token, testVoiceChat} = require('./config.json');
const { DisTube } = require('distube');
const messages = require('./riot-api/src/messages.json');

const client = new Client({
	intents: [
	  GatewayIntentBits.DirectMessages,
	  GatewayIntentBits.Guilds,
	  GatewayIntentBits.GuildBans,
	  GatewayIntentBits.GuildMessages,
	  GatewayIntentBits.MessageContent,
	  GatewayIntentBits.GuildVoiceStates,
	],
	partials: [Partials.Channel],
  });

client.DisTube = new DisTube(client,{
	leaveOnStop: true
});


client.on("ready", () => {
	console.log("Ready!");	
});

//We can utilize this to catch whenever someone sends a message in a discord that MitchBot is in.
client.on('messageCreate', async (message) => {
	/*
	if(message.author.id === davId){
		if(message.author.bot || !message.guild) return;
		message.channel.send("Testing");
	}
	*/
});

//Utilize the deathcount passed over in eventPoller to know which message we should grab from messages.json
function callMitchellBad(deathCount) {
	if(deathCount <= 9) {
		//This is for the voice chat stuff
		const voiceChannel = client.channels.cache.get(testVoiceChat);
		client.DisTube.play(voiceChannel, messages[deathCount-1].video, {});
		
		
		//Commenting this out because we'd rather have the voice bot
		//client.channels.cache.get(mainGeneralChat).send(messages[deathCount-1].message);


	}
}

// Login to Discord with your client's token
client.login(token);

module.exports = { callMitchellBad };