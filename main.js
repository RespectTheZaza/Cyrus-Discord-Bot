const Discord = require('discord.js');
const TOKEN = require('./credentials');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

client.once('ready', () => {
    console.log('Cyrus is online!');

})

////// Commands //////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case 'cyrus':
            client.commands.get('cyrus').execute(message, args, Discord);
            break;
        case 'who':
            client.commands.get('who').execute(message, args, Discord);
            break;
        case 'where':
            client.commands.get('where').execute(message, args, Discord);
            break;
        case 'purpose':
            client.commands.get('purpose').execute(message, args, Discord);
            break;
        case 'play':
            client.commands.get('play').execute(message, args, Discord);
            break;
        case 'leave':
            client.commands.get('leave').execute(message, args, Discord);
            break;
        case 'hello':
            client.commands.get('hello').execute(message, args, Discord);
            break;
    }
});

////// Token ///////

client.login(TOKEN.token);

