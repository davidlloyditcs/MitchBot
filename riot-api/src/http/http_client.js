//Gonna be honest I just copied this from a tutorial
const fetch = require('node-fetch');
const https = require('https');
const fs = require('fs');
const path = require('path');

class HttpClient {
    constructor(options = {}){
        this.baseUri = options.baseUri;
        this.defaultOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            agent: new https.Agent({
                 ca: fs.readFileSync(path.join(__dirname, '..', 'riot', 'riotgames.pem'),'utf-8'),
                }),
        };
    }

    get(endpoint, options = {}) {
        return fetch(`${this.baseUri}${endpoint}`, {
            ...this.defaultOptions,
            ...options,
            method: 'GET',
        });
    }
}

module.exports.HttpClient = HttpClient;
