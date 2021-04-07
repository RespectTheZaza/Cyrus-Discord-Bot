module.exports = {
        name: 'cyrus',
        description: 'Embeds!',
        execute(message, args, Discord) {
            const newEmbed = new Discord.MessageEmbed()        
            .setTitle('Hello! Around The World! I am Cyrus!')
            .setAuthor('Use ( - ) to talk to me :smiley:')
            .setColor(0xff0000)
            .setDescription('Here are questions you can ask me before I show you my full power!')
            .addFields(
            {name: 'Question: 1 ( -who )', value: 'Who are you?'},
            {name: 'Question: 2 ( -where )', value: 'Where is Zaza?'},
            {name: 'Question: 3 ( -purpose )', value: 'What is your purpose?'})
            .setURL('https://twitter.com/RespectTheZaza')
          
            .setImage('https://i.gyazo.com/862690b3b85eeb57ccb2876d3c35763a.png')
            .setFooter('Follow my masters social!!');

      message.channel.send(newEmbed);
    }
  };
