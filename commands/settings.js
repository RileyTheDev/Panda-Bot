const Discord = require("discord.js");
const mongoose = require('mongoose');
const Guild = require('../models/guildSchema');
const modRole = process.env.modRole

module.exports = {
    name: 'settings',
    cooldown: 0,
    description: "Allows the server owner to change the guild settings",
    async execute(message, args, cmd, client, Discord) {
        //settings
        let guildProfile = await Guild.findOne({ guildID: message.guild.id});
        if(!guildProfile) {
            guildProfile = await new Guild({
                _id: mongoose.Types.ObjectId(),
                userID: String,
            });
            await guildProfile.save().catch(err => console.log(err));
        }
        if(!args.length) {
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}'s Settings`)
            .setDescription(`If you are seeing no fields below it is because there is nothing assigned for the property\nProperties: prefix, muteRoleID, memberRoleID`)
            .setColor('#000000')

            if (guildProfile.prefix) embed.addField(`Prefix:`, guildProfile.prefix)
            if (guildProfile.muteRoleID) embed.addField(`Mute Role ID:`, guildProfile.muteRoleID);
            if (guildProfile.memberRoleID) embed.addField(`Member Role ID:`, guildProfile.memberRoleID);
            message.channel.send(embed);
        } else {

        }
    }

}