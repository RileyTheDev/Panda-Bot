const Discord = require('discord.js');

module.exports = {
    name: 'roll',
    description: 'Rolls a dice with x number of sides',
    execute(message, args, cmd, client, Discord) {
        if (isNaN(args[0])) return message.reply("please enter a real number")
        var response = [Math.floor(Math.random() * ((args[0] - 1) + 1) + 1)];
        const diceEmbed = new Discord.MessageEmbed()
             .setTitle(`🎲 d${args[0]}`)
             .setDescription(`**You got ${response}**`)
             message.channel.send(diceEmbed);
    }
}


