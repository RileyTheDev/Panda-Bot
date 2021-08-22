const { Client, RichEmed, MessageEmbed } = require('discord.js')
const bot = new Client();
const modRole = process.env.modRole

module.exports = {
    name: 'poll',
    description: "Creates Polls",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
        let msgArgs = args.slice(0).join(" ")
        const pollEmbed = new Discord.MessageEmbed()
            .setTitle(msgArgs)
            .setColor('#000000')
        message.channel.send({ embed: pollEmbed }).then(pollEmbed => {
            pollEmbed.react("👍")
            pollEmbed.react("👎")
            message.delete(5000).catch(console.error);
        });

    }

}