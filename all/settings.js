require("./module")

global.owner = "6289653381067"
global.namabot = "w"
global.namaCreator = "w"
global.autoJoin = false
global.antilink = false
global.versisc = '1.0'
global.codeInvite = "HodVVfebYuAKZXwM4VhdAe"
global.domain = 'https://ghxyy.storepannel.xyz' // Isi Domain Lu
global.apikey = 'ptla_jxIAJj6kPT6QLl7pOFv5iJ7iG5Jp0haL3FSAvqFIN9k' // Isi Apikey Plta Lu
global.capikey = 'ptlc_bfN13DPzF8Vuh8G0NjfK2YH8vTMz2QvXhp9FsBcD2nh' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Ghosky @w_.nunu"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})