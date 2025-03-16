const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "P3YWmQxL#V2OyVt8EBHRiW5IiUKGNdoxtVnEZp_q8ljvitwJZF4g", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "groups", //private or publics
AUTO_VOICE: "false", //true or false
MONGODB: "mongodb+srv://lithumhelitha2008:7rDwXUVeTnIfmnjl@cluster0.1d0bq.mongodb.net/",
CAPTION: "> *🎬NADEEN-MD🎬*",
JIDS: [],
SUDO: ['94711451319','94779483535','94716769285','94728840491']

};
