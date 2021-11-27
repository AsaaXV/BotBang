let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ Telkomsel : 081313144291
├ Dana : 081313144291
└────
`.trim(), '© nekobotz', 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
