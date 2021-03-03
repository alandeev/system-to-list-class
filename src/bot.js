const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.on('message', (msg) => require('./events/message')(msg, client));

console.log("Bot connected!")
client.login(process.env.TOKEN_BOT);