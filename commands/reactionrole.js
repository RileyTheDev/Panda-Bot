const modRole = process.env.modRole

module.exports = {
    name: 'reactionrole',
    aliases: ['rrole'],
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '812012633846579200';
        const userRole = message.guild.roles.cache.find(role => role.name === "Basement Dweller");
        const memberRole = 'Member'
        const yellowTeamEmoji = '👍';
        

        if (!message.member.roles.cache.some(role => role.name === modRole)) return message.reply("You Do Not Have Permission To Use This Command!")
        let embed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('Reaction Role')
            .setDescription('React To This Message To Gain Access To The Rest Of The Server | By Reacting To This Message You Agree To Follow The Afformentioned Rules')

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(userRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === userRole) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(userRole);
                }
            } else {
                return;
            }
            
        });
    }
 
}   