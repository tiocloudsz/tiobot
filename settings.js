const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'hsbpiP8vaksH5ED', // ISI APIKEY LU
}

global.namabot = "TIO_CLOUDSZ" // UBAH JADI NAMA LU
global.namaowner = "TIO" // NAMA OWNER
global.footer_text = "TIO_CLOUDSZ" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/TIO1.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/shareqr.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285785056491'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://chat.whatsapp.com/DilAplHr8eo42u0Ote9Lxd" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/DilAplHr8eo42u0Ote9LVQ`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
// - \\
// PEMISAH \\
global.packname = 'TIO_CLOUDSZ' //sticker wm ubah
global.author = 'TIO' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
