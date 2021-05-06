const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(client, message, args, Discord) { 
        const helpembed = new Discord.MessageEmbed()
        .setColor('#F71313')      
        .setTitle('**COMMANDS SECTION**')
        .setURL('https://twitter.com/RespectTheZaza')
        .setDescription('**Prefix is: =**')
        .addFields(
            {name: `Help`, value: '`N/A`'},
            {name: `General`, value: '`play`,`leave`'},
            {name: `Fun`, value: '`N/A`'},
            {name: `Admin | Moderation`, value: '`N/A`'},
        )      
        .setImage('https://i.gyazo.com/85f6a07db714deb150361ba08ab24688.png')
        .setFooter('if you have any questions ask a Admin or Moderator! :)');

  if (!args[0]) return message.channel.send(helpembed);
}
};
