const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/AUD-20240901-WA0161.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `╚» .${commands[i].pattern}\n`;
 }
}
        let madeMenu = `*👋 Hello ${pushname}*
✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗! ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴜsᴇʀ : ${pushname}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : *ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ [ᴅᴀʀᴋ ᴄʏʙᴇʀ ᴍᴀᴛʀɪx]*
│◈ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : *94711451319*
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴍᴏᴅᴇ : ${config.MODE}
│◈ ᴠᴇʀꜱɪᴏɴ : *2.0.0*
╰▄︻┻------------|︻┳═─-●●►
   🚀ᴊᴏɪɴ ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴡᴀ ᴄʜᴀɴɴᴇʟ 🚀
*╭──┄┄┄┄┄┄┄┄┄┄────*
*┋☞ 1⃣  • ᴏᴡɴᴇʀ*
*┋☞ 2⃣  • ᴄᴏɴᴠᴇʀᴛ*
*┋☞ 3⃣  • ᴀɪ*
*┋☞ 4⃣  • sᴇᴀʀᴄʜ*
*┋☞ 5⃣  • ᴅᴏᴡɴʟᴏᴀᴅ*
*┋☞ 6⃣  • ᴍᴀɪɴ*
*┋☞ 7⃣  • ɢʀᴏᴜᴘ*
*┋☞ 8⃣  • ғᴜɴ*
*┋☞ 9⃣  • ᴏᴛʜᴇʀ*
*╿☞ 1⃣0⃣ • ᴛᴏᴏʟs*
*╰━━┉┉┉━━┉┉━┉┅┅┅┅┅⪼*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ 🔢*
✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`;

        await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/2nmi9q.png`},caption:madeMenu},{quoted: mek})
  
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
 ${menu.owner}
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '2':               
                        repl (`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨

╭─────────────⪼
 ${menu.convert}
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '3':               
                        reply(`〘 𝗔𝗜 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
 ${menu.ai}
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '4':               
                        reply(`〘 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 〙

╭──────── ────⪼
 ${menu.search}
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '5':               
                        reply(`〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
${menu.download}
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '6':               
                        reply(`〘 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〙

╭─────────────
${menu.main}
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '7':               
                        reply(`〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

╭────────────⪼
${menu.group}
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                       break;
                    case '8':               
                        reply(`〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
${menu.fun}
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                       break;
                    case '9':               
                        repl (`〘 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
${menu.other}
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);
                        break;
                    case '10':               
                        reply(`〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
${menu.tools}
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

✨𝐉𝐎𝐈𝐍 𝐔𝐒 : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

> *👨🏻‍💻𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗👨🏻‍💻*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
