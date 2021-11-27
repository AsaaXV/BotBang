let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*

*Nama* : Fatur
*Umur* : 16
*Kelas* : SMA
*Status* : Jomblo

*SOSIAL MEDIA*

*instagran* : none
*Facebook* : none
*Chanel Youtube* : none
*Gmail* : none

_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(`https://telegra.ph/file/c4385b1b2134bcec6cceb.jpg`)).buffer(), ext, 'Recoded By FaturGanz', 'Nomor Owner', '.nowner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler