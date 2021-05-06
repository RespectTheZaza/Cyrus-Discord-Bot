module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(client, Discord, message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");
        await voiceChannel.leave();
        await message.channel.send('Heading out, see you guys later :smiling_face_with_tear:')
 
    }
}