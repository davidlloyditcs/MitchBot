# MitchBot

Mitchbot, at its core, is a discord bot with the sole purpose of messing with our friend Mitchell. We've created this to be able to see what all we can do with the discord bot. We started with simple message responses, but have now moved on to things like connecting to the Riot API to detect when Mitchell dies so we can send insulting messages. The world is our oyster and this is only the beginning.


# Files

In order to run this locally, you'll need a few files that have been gitignored:
- riotgames.pem
>File location: MitchBot/riot-api/src/riot/ 
>Purpose: store riot root certificate (https://static.developer.riotgames.com/docs/lol/riotgames.pem) 

- config.json
>File location: MitchBot/ 
>Purpose: Store things like Discord bot token, IDs for Discord users / channels / servers, summonerName, etc.

- messages.json
>File location: MitchBot/riot-api/src/
>Store the different messages we want to send to Mitchell in response to him dying in a League of Legends game
