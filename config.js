/**
   * Create By Raiden.
   * Contact Me on wa.me/62859180658541
   * Follow https://github.com/NoviBotz
*/

/**
	* Recode by jas kiding
	* Contact Me on wa.me/6282139672290
	* Edit premium di command 'addprem' & 'delprem'
**/

const fs = require('fs')
const chalk = require('chalk')

global.autorespon = true //auto respon private chat
global.autobio = true ///auto set bio
global.welcome = false //detect join
global.goodbye = false //detect leave
global.promote = false //detect promote & demote
global.log= false //bot log
global.prem = false //matikan jika ingin membuat semua fitur menjadi free
global.revlimit = true //nyalakan jika ingin menyalakan fitur limit

// Other
global.botname = "Slemek-bot" //nama bot
global.owner = ['6282139672290','6285649134084'] //ownernya
global.packname = 'Slemek' //stiker packname
global.author = 'WhatsApp Bot' //stiker author
global.sessionName = 'session' //gausah di apa2in
global.gmail = 'memeradef@gmail.com' //email lu
global.linkgc = 'https://chat.whatsapp.com/COY61GkJfYlCLwJkFYrCZw' //link grup wangsaf lu
global.menu = './media/menu.jpg' //gambar menu 1
global.menu2 = './media/menu2.jpg' //gambar menu 2
global.xlsx = './media/fake.xlsx' //gausah di apa2in
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    done: 'Done😁',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    ban: 'Kamu telah di banned dari bot ini', 
    premium: 'Fitur khusus premium user!', 
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: 'No limit',
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
