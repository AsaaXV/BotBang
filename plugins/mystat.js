let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.DATABASE.data.settings
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)


    m.reply(`
*╭─❏ _•❗「 Info 」_*
*│• Aktif Selama : ${uptime}*
*│• Baterai : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}*
*│• Grup : ${groups.length}*
*│• Chat Pribadi : ${chats.length - groups.length}*
*│• Pengguna : ${Object.keys(global.DATABASE.data.users).length}*
*│• Jadibot : ${totaljadibot.length}*
*│• Terblock : ${conn.blocklist.length}*
*│• Chat terbanned : ${Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned).length}*
*│• Pengguna Terbanned : ${Object.entries(global.DATABASE.data.users).filter(user => user[1].banned).length}*
*╰────────────❏*
╭─❏ •❗「 Pengaturan 」
│➤ ${anon ? '✅' : '❌'} *Anon Chat*
│➤ ${anticall ? '✅' : '❌'} *Anti Call*
│➤ ${antispam ? '✅' : '❌'} *Anti Spam*
│➤ ${antitroli ? '✅' : '❌'} *Anti Troli*
│➤ ${backup ? '✅' : '❌'} *Auto Backup DB*
│➤ ${groupOnly ? '✅' : '❌'} *Mode Grup*
│➤ ${jadibot ? '✅' : '❌'} *Jadi Bot*
│➤ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
╰────────────❏
    `.trim())
}
handler.help = ['mystat']
handler.tags = ['info']
handler.command = /^mystat$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
