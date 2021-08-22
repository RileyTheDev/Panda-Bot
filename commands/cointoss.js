const Discord = require('discord.js');

module.exports = {
    name: 'cointoss',
    aliases: ['flip', 'toss', 'coin', 'coinflip'],
    description: 'flips a coin',
    async execute(message, args, cmd, client, Discord){
        const choices = ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)]
        const coinTossEmbed = new Discord.MessageEmbed()
        .setTitle("Coin Toss")
        .setDescription(`It Landed on ${choice}!`)

        message.channel.send(coinTossEmbed)
    }

}

