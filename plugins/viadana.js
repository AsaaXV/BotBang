let handler = async (m, { conn }) => {
	conn.reply(m.chat, `*╭─❏ _•❗「 E-MONEY 」_*
*│➤ Untuk Pembayaran Via Dana*
*│• 081313144291*
*╰────────❏*
*╭─❏ _•❗「 Fitur 」_*
*│• FITUR WELCOME*
*│• FITUR STIKER*
*│• FITUR ADMIN*
*│• KICK ORANG*
*│• JADIIN ADMIN*
*│• FITUR ISLAM*
*│• QURAN*
*│• CEK JADWAL SHALAT*
*│• INTERNET*
*│• BRAINLY*
*│• GOOGLE*
*│• DAN 200 LEBIH*
*│• FITUR LAINNYA*
*╰────────❏*
*╭─❏ ©2021 Rpg wabot-aq*
*│➤ Scrip original by Nurutomo*
*╰──❏〘 BotBang 〙*`.trim(), m)
}

handler.command = /^viadana$/i

module.exports = handler