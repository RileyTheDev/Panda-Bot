const { TextChannel } = require("discord.js");

module.exports = {
    name: 'ping',
    cooldown: 5,
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord) {
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('Pong!')
        message.channel.send(pingEmbed)
    }

}