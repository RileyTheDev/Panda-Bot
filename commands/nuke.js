const Discord = require('discord.js');
const modRole = process.env.modRole

module.exports = {
    name: 'nuke',
    aliases: [''],
    description: "nukes a channel",
    async execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
                if (!args[0]) return message.reply("please enter the number of messages you wish to clear")
                if (isNaN(args[0])) return message.reply("please enter a real number")
        
                if (args[0] < 1) return message.reply('You need to delete at least 1 message :man_facepalming:');
                if (args[0] > 100) return message.reply('You cannot delete more than 100 messages at a time');
        
                await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                    message.channel.bulkDelete(messages);

                    const nukeEmbed = new Discord.MessageEmbed()
                        .setColor('#000000')
                        .setTitle('**Nuked!**')
                        .setImage('https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif')
                     
                    message.channel.send(nukeEmbed) 
                    
//                    message.channel.send("Nuked!")
//                    message.channel.send(["https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif"]);
                });
        
    }
} 