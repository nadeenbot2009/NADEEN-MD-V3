const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XVoxUbYT#TKvbGqKDHwedkv86uC7UVRXSc3MtUisgCWl0dvDfXA0", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "public", //private or publics
AUTO_VOICE: "false", //true or false
INBOX_BLOCK: process.env.INBOX_BLOCK || "true", //true or false
MONGODB: "mongodb+srv://lithumhelitha2008:7rDwXUVeTnIfmnjl@cluster0.1d0bq.mongodb.net/",
CAPTION: "> *🎬NADEEN-MD🎬*",
JIDS: [],
SUDO: ['94711451319','94779483535','94716769285','94728840491']

};
