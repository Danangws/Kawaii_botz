let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085715590172]
│ • Gopay [085715590172]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285715590172
╰────
https://chat.whatsapp.com/JjI08e4HVMUCDjz4DzFPkD
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
