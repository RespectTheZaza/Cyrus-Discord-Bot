module.exports = {
    name: 'commands',
    description: "this is the command",
    execute(message, args, Discord) {
        message.channel.send('-who\n-where\n-purpose\n-play\n-leave\n!schedule');
    }
};