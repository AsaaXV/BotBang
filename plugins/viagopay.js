let handler = async (m, { conn }) => {
	conn.reply(m.chat, `*╭─❏ _•❗「 E-MONEY 」_*
*│➤ Untuk Pembayaran Via Gopay*
*│• Engak Ada*
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
*️│➤ Scrip original by Nurutomo*
*╰──❏〘 BotBang 〙*`.trim(), m)
}

handler.command = /^viagopay$/i

module.exports = handler