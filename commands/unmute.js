const modRole = process.env.modRole

module.exports = {
    name: 'unmute',
    description: 'Unmutes a specified User',
    execute(message, args, cmd, client, Discord) {
        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Basement Dweller');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}