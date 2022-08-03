const EventEmitter = require('events');
const callMitchellBad = require('../../index');
const { summonerName } = require('../../config.json')
let deathCount = 0;

const NEW_EVENT = 'new_event';

class EventPoller  {
    constructor(gameClient) {
        this.gameClient = gameClient;
        this.eventEmitter = new EventEmitter();
        this.broadcastedEvents = [];
        this.interval = null;

    }

    start(){
        //If the interval has already been started (therefore this.interval != null). If it already exists, we don't want to do anything to prevent looping
        if (this.interval){
            return;
        }

        //Look for new events every second
        this.interval = setInterval(async () => {
            //Grab all the events in this game
            const matchEvents = await this.gameClient.getEvents();

            //Compare the list we just grabbed with the existing list of events. If the length is the same, then we don't want to do anything, since no new events have happened.
            const lengthDiff = Math.abs(this.broadcastedEvents.length - matchEvents.length);
            if(lengthDiff === 0){
                return;
            }

            //If the length IS different, then let's only iterate through the NEW events, ignoring the old ones.
            const missingEvents = matchEvents.slice(-lengthDiff);

            missingEvents.forEach(evt => {
                //Iterate through the NEW events & parse the JSON 
                this.eventEmitter.emit(NEW_EVENT, evt);
                this.broadcastedEvents.push(evt);
                console.log(evt);
                let str = JSON.stringify(evt);
                let obj = JSON.parse(str);
                //Check to see if the event we're looking at is a ChampionKill, and if the person who got killed is the one we want
                if(obj.EventName == 'ChampionKill' && obj.VictimName == summonerName){
                    //add 1 to deathCount so we can pass the correct message to the callMitchellBad function in index.js
                    deathCount = deathCount + 1;
                    callMitchellBad.callMitchellBad(deathCount);
                }
            });
        }, 1000);
    }


    subscribe(callback) {
        this.eventEmitter.on(NEW_EVENT, callback);

        return () => this.eventEmitter.removeListener(NEW_EVENT, callback);
    }
}

module.exports.EventPoller = EventPoller;