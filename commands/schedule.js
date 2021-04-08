const { MessageCollector } = require('discord.js')
const momentTimezone = require('moment-timezone')

const scheduledSchema = require('../models/scheduled-schema')


module.exports = {
    name: 'schedule',
    requirePermissions: ['ADMINSTRATOR'],
    expectedArgs: '<Channel tag> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    minArgs: 5,
    maxArgs: 5,
    init: () => {},
    callback: async ({ message, args }) => {
        const { mentions, guild, channel } = message

        const targetChannel = mentions.channel.first()
        if (!targetChannel) {
            message.reply('Please tag a channel to send your message in.')
            return
        }

        args.shift()

        const [date, time, clockType, timeZone] = args

        if (clockType !== 'AM' && clockType !== 'PM') { 
         message.reply(`You must provide either "AM" or "PM", you provided "$ 
         {clockType}"`)
         return
        }

        const validTimeZones = momentTimezone.tz.names()
        if (!validTimeZones.includes(timeZone)) {
          message.reply(
              'Unknown timezone! Please use one of the following: <https://gist.github.com/AlexzanderFlores/d511a7c7e97b4c3ae60cb6e562f78300>'
          )  
        }

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clockType}`,
            'YYYY-MM-DD HH:mm A',
            timeZone 
        )

    message.reply('Please send the event you would like to schedule.')

    const filter = (newMessage) => {
        return newMessage.author.id === message.author.id
    }

    const collector = new MessageCollector(channel, filter, {
        max: 1,
        time: 1000 * 60 // 60 seconds 
    })

    collector.on('end', async (collected) => {
        const collectedMessage = collected.first()

        if (!collectedMessage) {
           message.reply('You did not reply in time.') 
        }

        message.reply('Your message has been scheduled.')

        await new scheduledSchema({
          date: targetDate.valueOf(),
          content: collectedMessage.content,
          guildId: guild.id,
          targetId: targetChannel.id
        }).save()
    })
    }
}