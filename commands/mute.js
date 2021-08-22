const ms = require('ms');
const modRole = process.env.modRole
module.exports = {
    name: 'mute',
    aliases: ['m'],
    description: "This mutes a member",
    execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === process.env.mainRole);
            let muteRole = message.guild.roles.cache.find(role => role.name === process.env.muteRole);
 
            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            } else {
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            }, ms(args[1]));
            }
        } else {
            message.channel.send('Cant find that member!');
        }
        
    }
}