const Client = require('./client/Client.js')
const { getVoiceConnection } = require("@discordjs/voice");
const config = require('./config.js');
require('dotenv').config();
var colors = require('colors');

const { Collection } = require('discord.js');




const client = new Client();


client.deploySlash = {
    enabled: true,
    guild: true, 
  }



client.commands = new Collection();
client.slashCommands = new Collection();


require('./client/MusicManager.js')(client);


require('./handlers/clientHandler.js')(client);
require('./handlers/musicHandler.js')(client);



client.login(process.env.TOKEN)


const http = require("http");
http.createServer((_, res) => res.end("L")).listen(8080)


const ms = require("ms");
setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, ms("1m"));