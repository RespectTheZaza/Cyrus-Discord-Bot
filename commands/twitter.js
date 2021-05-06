module.exports = {
    name: 'twitter',
    description: 'Developers twitter',
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        const botInfo = new Discord.MessageEmbed()
    .setDescription('[***Developers Twitters!***]\nhttps://twitter.com/RespectTheZaza')
    
    message.channel.send(botInfo);   
    }
}     