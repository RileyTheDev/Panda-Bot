const Discord = require("discord.js");
const modRole = process.env.modRole

module.exports = {
    name: 'help',
    description: "Gives a list of commands",
    cooldown: 2,
    execute(message, args, cmd, client, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('**Commands and Usage | !help**')
            .addFields({ name: '**__User Commands:__**', value: 'Anyone can use these commands' }, )
            .addFields(
                { name: ' ‎ ‎ ‎ ‎  `!help`', value: ' ‎ ‎  ‎ ‎ Sends this message :)' },
                { name: ' ‎ ‎  ‎ ‎ `!ping`', value: ' ‎ ‎  ‎ ‎ Responds "pong!"' },
                { name: ' ‎ ‎  ‎ ‎ `!logs`', value: ' ‎ ‎  ‎ ‎ Starts the Logs in #logs *(In Development)*' },
                { name: ' ‎ ‎  ‎ ‎ `!avatar [ @user ]`', value: ' ‎ ‎  ‎ ‎ Sends the avatar of whatever user you ping"' },
                { name: ' ‎ ‎  ‎ ‎ `!embed [ Message ]`', value: ' ‎ ‎  ‎ ‎ Creates an embed containing whatever the user sent in the command"' },
                { name: ' ‎ ‎  ‎ ‎ `!user-info [ @user ]`', value: ' ‎ ‎  ‎ ‎ Sends the name, ID, and Profile picture of the user you ping' }, 
                { name: ' ‎ ‎  ‎ ‎ `!play [ song or link ]`', value: ' ‎ ‎  ‎ ‎ Streams videos from youtube, same functionality as Rythm' }, 
                { name: ' ‎ ‎  ‎ ‎ `!roll [ Number of sides ]`', value: ' ‎ ‎  ‎ ‎ Rolls a dice with whatever amount of sides you specify"' },
                { name: ' ‎ ‎  ‎ ‎ `!cointoss`', value: ' ‎ ‎  ‎ ‎ Flips a coin. Aliases: "`flip`, `toss`, `coin`, `coinflip`"' },
                { name: ' ‎ ‎ ‎ ‎  `!meme`', value: ' ‎ ‎  ‎ ‎ Sends a random meme from r/memes. *(In Development)*' },
            )
            
            .addFields({ name: '**__Admin Commands:__**', value: 'You will need the `Basement Moderator` role to use these commands' }, )
            .addFields(
                
                { name: '‎‎‎ ‎ ‎ ‎ ‎ ‎ `!mute [ @user ] [ Time ]`', value: ' ‎ ‎  ‎ ‎ Mutes Whoever You Ping' },
                { name: ' ‎ ‎  ‎ ‎ `!unmute [ @user ]`', value: ' ‎ ‎  ‎ ‎ Unmutes Whoever You Ping' },
                { name: ' ‎ ‎  ‎ ‎ `!kick [ @user ]`', value: ' ‎ ‎  ‎ ‎ Kicks Whoever you ping' },
                { name: ' ‎ ‎  ‎ ‎ `!ban [ @user ]`', value: ' ‎ ‎  ‎ ‎ Bans Whoever You Ping' },
                { name: ' ‎ ‎  ‎ ‎ `!nuke [ Number of Messages ]`', value: ' ‎ ‎  ‎ ‎ Deletes a specifed amount of messages' },
                { name: ' ‎ ‎  ‎ ‎ `!poll [ The Poll ]`', value: ' ‎ ‎  ‎ ‎ Makes a poll embed and auto reacts to it with 👍 and 👎' },
                { name: ' ‎ ‎  ‎ ‎ `!reactionrole`', value: ' ‎ ‎  ‎ ‎ Sends an embed with an auto-role function attached' },
                { name: ' ‎ ‎  ‎ ‎ `!mutehelp`', value: ' ‎ ‎  ‎ ‎ Sends An Embed Containing Milisecond Conversions for the `!mute` command' },
            )

        message.channel.send(helpEmbed) 

    }

}