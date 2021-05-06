module.exports = {
    name: 'rules',
    description: 'Basic Rules',
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()  
        .setColor('#F71313')      
        .setTitle('**THE RULES**')
        .setURL('https://twitter.com/RespectTheZaza')
        .setDescription('**Here are rules you should read before you enter a channel!**')
        .addFields(
            {name: `Rule 1`, value: `Be nice`},
            {name: `Rule 2`, value: 'Be respectful of everyone'},
            {name: `Rule 3`, value: `No inappropriate nicknames.`},
            {name: `Rule 4`, value: 'No inappropriate profile pictures.'},
            {name: `Rule 5`, value: `No new members granted (under 14 years old).`},
            {name: `Rule 6`, value: 'No inviting new users to server (Ask Admin First!!)'},
            {name: `Rule 7`, value: `No SPAMMING`},
            {name: `Rule 8`, value: 'No @everyone mentioning without reason'},
            {name: `Rule 9`, value: `Be nice`},
            {name: `Rule 10`, value: 'No NSFW content.'},
        )      
        .setImage('https://i.gyazo.com/30067e27612852fe5f4d6fd518bedbb8.png')
        .setFooter('We Appreciate your time for reading these rules. Have fun and make Friends!😀');

  message.channel.send(newEmbed);
}
};