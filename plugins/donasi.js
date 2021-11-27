let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─❏ •❗「 Donasi • e-money 」
│➤ Telkomsel : 6285240389682
│➤ Dana : 6285240389682
╰──────────❏
`.trim(), '© BotBang', 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
