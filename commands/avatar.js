const Discord = require('discord.js');
const modRole = process.env.modRole

module.exports = {
    name: 'avatar',
    aliases: ['pfp',],
    description: 'Return a user(s) avatar picture!',
    cooldown: 5,

    execute(message, args, cmd, client, Discord) {
        const avatarEmbed = new Discord.MessageEmbed() 
        .setColor('#000000')
        .setTitle(`**${message.mentions.users.first().username}‎'s Avatar**`)
        .setImage(message.mentions.users.first().avatarURL())
        message.channel.send(avatarEmbed)
    }
}