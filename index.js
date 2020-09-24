const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://com.sun.net.httpserver.HttpServer:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${config.prefix}ping`) {
	msg.channel.send('Pong.');
} else if (msg.content === `${config.prefix}butt`) {
  msg.channel.send('no u https://tenor.com/view/no-you-bitch-uno-menacing-card-gif-16237515.');
} else if (msg.content === `${config.prefix}server`) {
	msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
const { prefix } = config 
        
}
});

// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(config.token);