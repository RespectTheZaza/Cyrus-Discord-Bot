module.exports = {
    name: 'hello',
    description: "this is the hello command",
    execute(message, args, Discord) {
        message.channel.send('Just wanted to make a PR');
    }
}