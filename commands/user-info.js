const Discord = require('discord.js');
const avatar =  ``

 module.exports = {
    name:'user-info',
    aliases: ['userinfo', 'info', 'user'],
    description: 'Gives information about a user',
    cooldown: 2,
    execute(message, args, cmd, client, Discord) {
        const userinfoEmbed = new Discord.MessageEmbed() 
        .setColor('#000000')
        .setTitle('User Info')
        .addFields(
            { name: `User's Name:`, value: `*${message.mentions.users.first().username}‎*` },
            { name: `User's ID:`, value: `*${message.mentions.users.first().id}*` },)
        .setImage(message.mentions.users.first().avatarURL())
        message.channel.send(userinfoEmbed)
        }
        
    }
