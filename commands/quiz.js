const fetch = require('node-fetch');
const discord = require('discord.js');
const client = new discord.Client();

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.toLowerCase().startsWith("=quiz"))
    {
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple');
        console.log(response);
    }
})