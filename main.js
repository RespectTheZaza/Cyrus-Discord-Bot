const Discord = require('discord.js');
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

    if(command === 'cyrus'){
        client.commands.get('cyrus').execute(message, args, Discord);
    }
    if(command === 'who'){
        client.commands.get('who').execute(message, args, Discord);
    }
    if(command === 'where'){
        client.commands.get('where').execute(message, args, Discord);
    }
    if(command === 'purpose'){
        client.commands.get('purpose').execute(message, args, Discord);
    }
    if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    }
    if(command === 'leave'){
        client.commands.get('leave').execute(message, args, Discord);
    }
    if(command === 'hello'){
        client.commands.get('hello').execute(message, args, Discord);
    }

});

////// Token ///////

client.login('');

