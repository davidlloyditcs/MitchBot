const { HttpClient } = require('./http/http_client');
const { GameClient } = require('./riot/client');
const { EventPoller } = require('./eventPoller');


const BASE_URI = 'https://127.0.0.1:2999';

const gameClient =  new GameClient(new HttpClient({ baseUri: BASE_URI }));
const poller = new EventPoller(gameClient);

poller.start();


poller.subscribe((data) => {
    JSON.stringify({
        eventType: 'new_event', data
    });
});


