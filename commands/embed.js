const Discord = require("discord.js");
const modRole = process.env.modRole

module.exports = {
    name: 'embed',
    description: 'allows a user to send an embed',
    cooldown: 5,
    execute(message, args, cmd, client, Discord) {
        let msgArgs = args.slice(0).join(" ")
        const emptyEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle(msgArgs);
        message.channel.send(emptyEmbed)
    }
}