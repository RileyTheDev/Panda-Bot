const { TextChannel } = require("discord.js");
const modRole = process.env.modRole

module.exports = {
    name: 'mutehelp',
    aliases: ['mhelp'],
    description: "Gives a list of commands",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
        const muteEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('**Milliseconds Conversions**')
            .addFields(
                { name: 'Second', value: '1000' },
                { name: 'Minute', value: '60000' },
                { name: 'Hour', value: '3600000' },
                { name: 'Day', value: '86400000' },
                { name: 'Week', value: '604800000' },)
        message.channel.send(muteEmbed) 

    }

}