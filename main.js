const Discord = require('discord.js');
const TOKEN = require('./credentials');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

const { readdirSync } = require('fs');
const { join } = require('path');


const bot = new Discord.Client();

const prefix = '=';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

//Command and Event Handler

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on("message", (message) => {
    if (message.content === "goodmorning cyrus") {
        message.channel.send("goodmorning! hope you had an amazing night!", {
            tts: true
           })
    }
    if (message.content === "how are you cyrus") {
        message.channel.send("Im doing fantastic! Thank you for asking.", {
            tts: true
           })
    }
    if (message.content == "MembersCount" ) {
        const guild = client.guilds.cache.get('640686364135784488');
        const memberCount = guild.memberCount;
        message.channel.send(`There are Currently ${memberCount.toLocaleString()} Members in the Server`);
    }
    if (message.content === "goodnight cyrus") {
        message.channel.send(`GoodNight my child.`);
    }
    if (message.content === "ServerCount") {
        message.channel.send(`I am Currently Active in ${client.guilds.cache.size} Servers`);
    }
});

////// Commands //////

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){
        case 'help':
            client.commands.get('help').execute(message, args, Discord);
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
        case 'twitter':
            client.commands.get('twitter').execute(message, args, Discord);
            break;
        case 'rules':
            client.commands.get('rules').execute(message, args, Discord);

    }
});

////// Token ///////

client.login(TOKEN.token);


