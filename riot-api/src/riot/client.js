
class GameClient {
    constructor (httpClient) {
        this.httpClient = httpClient;
    }

    //This is how we actually get the in game events
    async getEvents() {
        const res = await this.httpClient.get('/liveclientdata/eventdata');
        const json = await res.json();

        return json.Events;

    }

}

module.exports.GameClient = GameClient;