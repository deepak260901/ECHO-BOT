/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'BF39D349845E',
}

// Other
global.owner = ['919015286428','13433016255']
global.premium = ['919015286428','13433016255']
global.packname = 'G̶A̶P̶P̶U̶-B̶O̶T̶😹'
global.author = '༆𝐃𝐄𝐄𝐏𝐀𝐊💞'
global.sessionName = 'session'
global.prefa = ['/','!','.','#',',','_']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Ciee Bukan Admin yaa🤣 Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin😌 Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner😏 Bot',
    group: 'Fitur Digunakan Hanya Untuk😂 Group!',
    private: 'Fitur Digunakan Hanya Untuk Private 😋Chat!',
    bot: 'Fitur Khusus Pengguna Nomor😜 Bot',
    wait: 'Loading...☠️',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/logo.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
