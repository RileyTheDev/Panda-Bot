const Discord = require('discord.js');


module.exports = {
    name: 'meme',
    description: "Sends a random meme",
    execute(message, args, cmd, client, Discord) {
        const memeEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('This Command is Currently in Development')
            .setDescription('Please Try Again Later')
        message.channel.send(memeEmbed)
    }
}