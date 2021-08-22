/////////////////////////////////////
//FTP_Host = 'ftpupload.net'       //
//FTP_USER = 'epiz_29042585'       //
//FTP_Password = 'mQtx7PN8J5YLqjj' //
//folderPath = './htdocs/logs'     //
/////////////////////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();
var path = require('path');
var fs = require('fs');
var Promise = require('bluebird');
var Client = require('ftp');

module.exports = {
    name: 'logs',
    description: "Allows a user to request server log files",
    permissions: ["ADMINISTRATOR"],
    execute(message, args, cmd, client, Discord) {
        const logsEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('This Command is Currently in Development')
            .setDescription('Please Try Again Later')
        message.channel.send(logsEmbed)
    }
}