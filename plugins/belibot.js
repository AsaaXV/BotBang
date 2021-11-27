let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭─❏〘 BELI BOT 〙
│➤ *1 Bulan* :      *Rp 20000*

│➤ *Permanen* : *Rp 30000*

│➤ *Premium* :   *Rp 20000* 
╰────❏

╭─❏〘 PEMBAYARAN 〙 
│➤ Dana : 
│• 6285240389682

│➤ Pulsa :

│• 6285240389682

╰────❏

╭─❏ 〘 INFO 〙

│➤ Tertarik Untuk Beli Bot Ini?

│➤ Ketuk Tombol Di Bawah Ya

╰────❏

╭─❏〘 CREATOR 〙

│➤ ©2021 Rpg wabot-aq

│➤ Scrip original by Nurutomo

╰────❏〘 BOT BANG 〙`.trim(), '© BotBang', 'Dana', '#viadana', 'GoPay', '#viagopay', m)
}

handler.command = /^sewa(bot)?$/i

module.exports = handler