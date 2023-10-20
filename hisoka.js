/**
   * Create By Raiden.
   * Contact Me on wa.me/62859180658541
   * Follow https://github.com/Raiden
*/

/**
	* Recode by jas kiding
	* Contact Me on wa.me/6282139672290
	* Edit premium di command 'addprem' & 'delprem'
**/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const cheerio = require('cheerio') 
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const scp1 = require('./lib/scraper1') 
const scp2 = require('./lib/scraper2')
const scp3 = require('./lib/scraper3') 
const photooxy = require('./lib/photooxy')
const textpro = require('./lib/textpro')
const ffstalk = require('./lib/ffstalk')
const githubstalk = require('./lib/githubstalk')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime) 
        //runtime
        const uptime = await runtime(process.uptime())
        
         const urlmenu = await TelegraPh(global.menu)
         const urlmenu2 = await TelegraPh(global.menu2) 
         const isBanned = global.db.data.user[m.sender]?.banned ?? false

         
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isPremium = isCreator || (global.db.data.user[m.sender]?.premium ?? false) 
    const userLimit = global.db.data.user[m.sender]?.limit ?? (isPremium ? global.limitawal.premium : global.limitawal.free);
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.user[m.sender] = {};
            
if (typeof global.db.data.user[m.sender] === 'undefined') {
	global.db.data.user[m.sender] = {};
	} 


            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = true
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
       let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.user)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.user[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (global.autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.updateProfileStatus(`Hi 😁👋, im ${global.botname} |🏃Runtime : ${uptime}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lagu`)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak gambar`)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? kirim ${prefix}tebak lontong`)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        const limited = (userLimit == 0) ? true:false
        const xlsx = fs.readFileSync(global.xlsx) 
        const tanggal = moment().tz('Asia/Jakarta').format('YYYY-MM-DD');
		const WIB = moment().tz('Asia/Jakarta').format('HH:mm');
		const WIT = moment().tz('Asia/Makassar').format('HH:mm');
		const WITA = moment().tz('Asia/Jayapura').format('HH:mm');
        const cmdGrup = ["linkgroup","ephemeral","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","mute","promote","demote"]
        const cmdDown = ["tiktoknowm","tiktokmp3","twitter","twittermp3","facebook","ytmp3","ytmp4","getmusic","getvideo","soundcloud","mediafire","gitclone"]
        const cmdSearch = ["play","yts","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","playstore","drakor","iqra","hadist","alquran","tafsirsurah","pixiv","ssweb","servermc","recipe","readrecipe","happymod"]
        const cmdStalk =["ghstalk","ffstalk","igstalk"]
        const cmdNews = ["infocnn","infogempa","infotsunami","infoantara","infocnb","kompasnews"]
        const cmdAnime = ["waifu","cry","kill","hug","pat","lick","kiss","bite","yeet","neko","bully","bonk","wink","poke","nom","slap","smile","wave","awoo","blush","smug","glomp","happy","dance","cringe","highfive","shinobu","megumin","handhold","loli","husbu","shota","akira","akiyama","ana","asuna","ayuzawa","boruto","chitoge","deidara","doraemon","elaina","emilia","erza","gremory","hestia","hinata","inori","isuzu","itachi","itori","kaga","kagura","kakashi","kaori","keneki","kotori","kurumi","madara","mikasa","miku","minato","naruto","nezuko","onepiece","pokemon","rize","sagiri","sakura","sasuke","shina","shinka","shizuka","toukachan","tsunade","yuki","cosplay","randomanime"]
        const cmdNsfw = ["waifus","blowjob","neko","trap","milf","ahegao","ass","bdsm","cuckold","cum","eba","ero","foot","fendom","gifs","glasses","hentai","jahy","nsfwmanga","mastubation","neko2","nsfwloli","orgy","panties","pussy","tentacles","thighs","yuri","zettai"]
        const cmdNabi = ["adam","ayyub","daud","dzulkifli","harun","hud","ibrahim","idris","ilyas","ilyasa","isa","ishaq","ismail","luth","muhammad","musa","nuh","sholeh","sulaiman","syuaib","yahya","yaqub","yunus","yusuf","zakariya "]
        const cmdAsupan = ["cogan","asupan","indonesia","malaysia","china","korea","jepang","vietnam","thailand","bocil","gheayubi","hijab","kayes","notnot","panrika","randomcecan","randomcecan2"," santuy","tiktokgirl","ukhty"]
        const cmdRanText = ["quotesanime","katabijak","couple","wangy","asmaulhusna","katailham","faktaunik","dare","truth"]
        const cmdRanImg = ["coffe","couple","meme","darkjokes","aesthetic","antiwork","bike","blackpinks","boneka","car","cat","doggo","justina","kpop","pubg","rose","ryujin","ulzzanggirl","ulzzangboy","wallhp","wallml","cyberspace","gamewallp","islamic","mountains","progamming","technology"]
        const cmdAi = ["simsimi","chatgpt","chatgb"]
        const cmdOxy = ["shadow","cup","romantic","smoke","naruto","tiktok","butterfly","metalic","kayu","horror","permen","silk","batik","nature3d","summer3d","fall","neonlights","lovemessage","glowingneon","woddenboard","burnpaper","flowerheart","write","narutobanner","underglass","doublelove","coffecup"," underwaterocean","smokyneon","starstext","rainboweffect","balloontext","metalliceffect","embroiderytext","flamingtext","stonetext","writeart","summertext","wolfmetaltext","rosestext","naturetypography","quotesender","shinetext"]
        const cmdTextPro = ["led","christmas","magma","space","transformer","thunder","cinematichorror","summer","summer2","bussines","lightglow","batman","sketch","3drainbow","halloweenskeleton"]
        const cmdEphoto = ["blackpink","bear","avengers","angel","graffiti","pornhub","mountain","purple"]
        const cmdFun = ["halah","hilih","huluh","heleh","holoh","jadian","jodohku","delttt","tictactoe","family100","tebak","math","suitpvp"]
        const cmdPrimbon = ["nomorhoki","artimimpi","artinama","ramaljodoh","ramaljodohbali","suamiistri","ramalcinta","cocoknama","pasangan","jadiannikah","sifatusaha","rezeki","pekerjaan","nasib","penyakit","tarot","fengshui","haribaik","harisangar","harisial","nagahari","arahrezeki","peruntungan","weton","karakter","keberuntungan","memancing","masasubur","zodiak","shio"]
        const cmdConv = ["attp","ttp","toimage","removebg","sticker","stickerwm","emojimix","emojimix2","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","smeme","bass","blown","deep","earrape","fast","fat","nightcore","reverse","robot","slow","tupai"]
        const cmdMain = ["ping","owner","menu","delete","infochat","quoted","listpc","listgc","listonline","speedtest","setcmd","listcmd","delcmd","lockcmd","addmsg","listmsg","getmsg","delmsg","anonymous","start","next","keluar","reportbug","join"]
        const cmdOwner = ["react","chat","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot","spam","autorespon","welcome","goodbye","promote","addprem","delprem","banuser","unbanuser","listuser"]
        const menu = `┌──✧ *Menu*
│
│❑ ${prefix}allmenu
│❑ ${prefix}menumain
│❑ ${prefix}menuowner
│❑ ${prefix}menugroup
│❑ ${prefix}menuanime
│❑ ${prefix}menunsfw
│❑ ${prefix}menukisahnabi
│❑ ${prefix}menuasupan
│❑ ${prefix}menuphotooxy
│❑ ${prefix}menutextpro
│❑ ${prefix}menuephoto
│❑ ${prefix}menuconverter
│❑ ${prefix}menufun
│❑ ${prefix}menuprimbon
│❑ ${prefix}menurandomtext
│❑ ${prefix}menurandomimage
│❑ ${prefix}menuai
│❑ ${prefix}menusearch
│❑ ${prefix}menudownload
│
└───────✧`
        const allCmd = [`┌──✧ *Main Menu*
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Owner Menu*
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Group Menu*
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Download Menu*
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Search Menu*
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Stalker Menu*
│
${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *News Menu*
│
${cmdNews.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Anime Menu*
│
${cmdAnime.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Nsfw Menu*
│
${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n\n\n┌──✧ *Kisah Nabi Menu*
│
${cmdNabi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Asupan Menu*
│
${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Random Text Menu*
│
${cmdRanText.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Random Image Menu*
│
${cmdRanImg.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *AI Menu*
│
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Photo Oxy Menu*
│
${cmdOxy.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Text Pro Menu*
│
${cmdTextPro.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Ephoto360 Menu*
│
${cmdEphoto.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Fun Menu*
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Primbon Menu*
│
${cmdPrimbon.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧\n\n┌──✧ *Converter Menu*
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`]

const total_fitur = cmdMain.length + cmdGrup.length + cmdDown.length + cmdSearch.length + cmdAnime.length + cmdNsfw.length + cmdRanText.length + cmdRanImg.length + cmdAi.length + cmdOxy.length + cmdFun.length + cmdPrimbon.length + cmdConv.length + cmdOwner.length + cmdAsupan.length + cmdNews.length + cmdEphoto.length + cmdTextPro.length + cmdNabi.length + cmdStalk.length
        const info = `*Hi @${m.pushName}* 👋
*Nomor* : ${m.sender.split('@')[0]}
*Status* : ${isPremium ? "Premium":"Free"} user
*Limit* : ${userLimit}

❑ *Bot name* : ${global.botname}
❑ *Bot owner* : ${global.owner[0]}
❑ *WIB* : ${WIB}
❑ *WIT* : ${WIT}
❑ *WITA* : ${WITA}
❑ *Total fitur* : ${total_fitur}
❑ *Prefix* : ${prefix}
❑ *Runtime* : ${uptime}\n\n`
            function userDataWrite() {
    global.db.data.user[m.sender] = {
      name: m.pushName,
      number: m.sender.split("@")[0],
      premium: isPremium,
      banned: isBanned, 
      reg: true,
      limit: userLimit,
      last_place: m.chat,
      last_cmd: command,
      last_time: `${tanggal} ${WIB} WIB`
   }
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

            function userData() {
if(!global.db.data.user[m.sender].reg) { 
	if(global.log) {
hisoka.sendMessage(`${global.owner[0]}@s.whatsapp.net`, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: `「New User」\n❑ Name: ${m.pushName}\n❑ Nomor: ${m.sender.split("@")[0]}\n❑ Tanggal : ${tanggal}\n❑ Jam: ${WIB} WIB\n❑ Last Command : ${command}`, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
};
            userDataWrite() 
            }
            }
            if(global.db.data.user[m.sender].reg) {
            	userDataWrite() 
            }
            function revLimit() {
            	if(global.revlimit) {
            	global.db.data.user[m.sender].limit -= 1
            }
            }
        switch(command) {
        	case 'banuser': case 'banneduser': case 'banned': {
        	if(isBanned) return m.reply(mess.ban) 
        userData() 
        if(!isCreator) return m.reply(mess.owner) 
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        global.db.data.user[users] = {};
        global.db.data.user[users].banned = true
        hisoka.sendText(m.chat, `Berhasil ban user! `, m) 
        }
        break
        case 'unbanuser': case 'unbanned': {
        if(isBanned) return m.reply(mess.ban) 
                userData() 
                if(!isCreator) return m.reply(mess.owner)
if(!text) return m.reply(`Masukan nomor telepon yang di mulai dengan kode negara, atau tag targetnya!\n\nContoh: \n${prefix + command} 6282139672290\n${prefix + command} @jas kiding`) 
let isBan = (global.db.data.user[users]?.banned ?? false)  
if(isBan) return m.reply(`Pengguna dengan nomor "${users}" sudah di banned`)
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        global.db.data.user[users].banned = false
        await hisoka.sendText(m.chat, `Berhasil unban user! `, m) 
        }
        break
        case 'addpremium': case 'addprem': {
        	if(isBanned) return m.reply(mess.ban) 
        userData() 
        	if(!isCreator) return m.reply(mess.owner)
        if(!text) return m.reply(`Masukan nomor telepon yang di mulai dengan kode negara, atau tag targetnya!\n\nContoh: \n${prefix + command} 6282139672290\n${prefix + command} @jas kiding`) 
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                let isPremi = (global.db.data.user[users]?.premium ?? false) 
                if(isPremi) return m.reply(`Pengguna dengan nomor "${users}" sudah memiliki status premium`)
                global.db.data.user[users] = {}
                global.db.data.user[users].limit = global.limitawal.premium
                global.db.data.user[users].premium = true
                hisoka.sendText(m.chat, `Berhasil menambahkan "${users}" ke premium`, m) 
                }
                break
                case 'delpremium': case 'delprem': {
        	if(isBanned) return m.reply(mess.ban) 
        userData() 
        	if(!isCreator) return m.reply(mess.owner)
        if(!text) return m.reply(`Masukan nomor telepon yang di mulai dengan kode negara, atau tag targetnya! \n\nContoh: \n${prefix + command} 6282139672290\n${prefix + command} @jas kiding`) 
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                let isPremi = (global.db.data.user[users]?.premium ?? false) 
                if(!isPremi) return m.reply(`Pengguna dengan nomor "${users}" tidak memiliki status premium`)
                if (typeof global.db.data.user[m.sender] === 'undefined') return m.reply(`Pengguna dengan nomor "${users} tidak di temukan`) 
                global.db.data.user[users].limit = global.limitawal.free
                global.db.data.user[users].premium = false
                hisoka.sendText(m.chat, `Berhasil menghapus "${users}" dari premium`, m) 
                }
                break
                
                
        	case 'userlist':
case 'listuser': {
	if(isBanned) return m.reply(mess.ban) 
	userData() 
  if (!isCreator) return m.reply(mess.owner);
  let capt = `「Database User」\n`;
  for (const key in global.db.data.user) {
    const userData = global.db.data.user[key];
    if (userData.reg === true) {
      capt += `❑ Name: ${userData.name}\n`;
      capt += `❑ Number: ${userData.number}\n`;
	  capt += `❑ Status: ${userData.premium ? "Premium":"Free"} user\n`;
	  capt += `❑ Banned: ${userData.banned}\n`;
	  capt += `❑ Limit: ${userData.limit}\n\n`;
      capt += `❑ Last time: ${userData.last_time}\n`;
      capt += `❑ Last cmd: ${userData.last_cmd}\n`;
      capt += `❑ Last place: ${userData.last_place}\n`;
      capt += `❑ Chat: https://wa.me/${userData.number}\n\n────────────────────\n\n`;
    }
  }

  hisoka.sendMessage(m.chat, {
    document: xlsx,
    fileName: botname,
    mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    fileLength: 0,
    pageCount: total_fitur,
    caption: capt,
    contextInfo: {
      externalAdReply: {
        title: botname,
        body: '',
        thumbnailUrl: urlmenu,
        sourceUrl: linkgc,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
}
break
        case 'deleteuser': case 'deluser': {
        	if(isBanned) return m.reply(mess.ban) 
        let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
        if(users !== m.sender) userData() 
        	if(!isCreator) return m.reply(mess.owner)
        	if(!text) return m.reply(`Masukan nomor telepon yang di mulai dengan kode negara, atau tag targetnya! \n\nContoh: \n${prefix + command} 6282139672290\n${prefix + command} @jas kiding`) 
        if(!global.db.data.user[users]) return m.reply(`Pengguna dengan nomor "${users}" tidak di temukan`) 
	delete global.db.data.user[users]
  hisoka.sendText(m.chat, `Pengguna dengan nomor "${users}" berhasil di hapus!`, m) 
}
break 
	    case 'afk': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n⭔ 13k Per Group via E-Walet 1 Month\n⭔ 18k via pulsa 1 Month\n\n Premium Price Bot\n⭔ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/${global.owner}` }, { quoted: m })
            }
            break
            case 'sc': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                m.reply('Script : https://github.com/Novi/NoviBotz\n\n Dont Forget Give Star\n\nDonate : 62859180658541 (Link Aja)\nSaweria : https://saweria.co/Novi\nPaypal : https://www.paypal.me/Cakhaho\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                if(!text) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0].toLowerCase() === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
		if(isBanned) return m.reply(mess.ban) 
		userData()
		revLimit() 
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0].toLowerCase() === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}`)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0].toLowerCase() === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}`)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            hisoka.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'react': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            	if (m.isGroup) throw mess.private
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                if (global.log) {
hisoka.sendMessage(`${global.owner[0]}.@s.whatsapp.net`, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: `「Bot Log」\nBot has been added by @${m.sender.split("@")[0]} \n\n❑ Date : ${tanggal}\n❑ Time : ${WIB} WIB\n❑ Link Group : ${text}`,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
            }
            break
            case 'leave': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat) 
                }
                break
            case 'setexif': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.done)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.done)
                }
                break
            case 'tagall': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'totag': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               hisoka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
		if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(limited) return m.reply(mess.endLimit) 
	        if(!isPremium && prem)return m.reply(mess.premium) 
		revLimit() 
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'group': case 'grup': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0].toLowerCase() === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                    hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
             }
            }
            break
            case 'editinfo': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0].toLowerCase() === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
                hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} Open`,`${command.charAt(0).toUpperCase()+command.slice(1)} Close`])
            }
            }
            break
            case 'antilink': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0].toLowerCase() === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0].toLowerCase() === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
             case 'mute': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0].toLowerCase() === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0].toLowerCase() === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0].toLowerCase() === '1') {
                    await hisoka.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === '7') {
                    await hisoka.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === '90') {
                    await hisoka.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'off') {
                    await hisoka.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                    hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", ["Ephemeral 1","Ephemeral 7","Ephemeral 90","Ephemeral Disable"])
                }
            }
            break
            case 'setnamabot': case 'setnamebot': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await hisoka.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${text}`)
            }
            break
            case 'setstatus': case 'setbiobot': case 'setbotbio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
            if (!text) throw `this is a WhatsApp Bot named Novi Botz`
            let name = await hisoka.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
            case 'anticall': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0].toLowerCase() === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0].toLowerCase() === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                hisoka.sendPoll(m.chat, "Silahkan Dipilih, I Hope Your Happy!", [`${command.charAt(0).toUpperCase()+command.slice(1)} On`,`${command.charAt(0).toUpperCase()+command.slice(1)} Off`])
                }
             }
             break
            case 'delete': case 'del': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.sendText(i, txt)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
    		for (let yoi of anu) {
    		    await sleep(1500)
    		    hisoka.sendText(yoi, txt)
    		}
    		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `❑ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━❑ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❑*Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `❑ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `❑ *Nama :* ${nama}\n❑ *User :* @${i.split('@')[0]}\n❑ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `❑ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `❑ *Nama :* ${metadata.subject}\n❑ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n❑ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❑ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
           if (/image/.test(mime)) {
           m.reply(mess.wait)
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            m.reply(mess.wait)
                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premoum)  
		revLimit() 
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		revLimit() 
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		revLimit() 
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hisoka.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': case 'simsimi': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)
		if(!isPremium && prem) return m.reply(mess.premium) 
		revLimit() 
            if (!text) throw `Example : ${prefix + command} text`
            let anu = await fetchJson(`https://api.akuari.my.id/simi/simi2?query=${text}`)
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.respon, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'toimage': case 'toimg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/AnandaGTPS/Slemek-bot`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    hisoka.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(mess.error))
break
	        case 'tourl': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.done}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `❑ No : ${no++}\n⭔ Type : ${i.type}\n❑ Video ID : ${i.videoId}\n❑ Title : ${i.title}\n❑ Views : ${i.views}\n❑ Duration : ${i.timestamp}\n❑ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n❑ Url : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `❑ *Title* : ${g.title}\n`
                teks += `❑ *Description* : ${g.snippet}\n`
                teks += `❑ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let Message = {
                    image: { url: images },
                    caption: `*-------✧「 GIMAGE SEARCH 」✧-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let caption = `
❑ Title : ${anu.title}
❑ Ext : Search
❑ ID : ${anu.videoId}
❑ Duration : ${anu.timestamp}
❑ Viewers : ${anu.views}
❑ Upload At : ${anu.ago}
❑ Author : ${anu.author.name}
❑ Channel : ${anu.author.url}
❑ Description : ${anu.description}
❑ Url : ${anu.url}`
                hisoka.sendPoll(m.chat, caption, [`Ytmp3 ${anu.url}`,`Ytmp4 ${anu.url}`])
            }
            break
	    case 'ytmp3': case 'ytaudio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `❑ Title : ${media.title}\n❑ File Size : ${media.filesizeF}\n❑ Url : ${isUrl(text)}\n❑ Ext : MP3\n❑ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❑ Title : ${media.title}\n❑ File Size : ${media.filesizeF}\n❑ Url : ${isUrl(text)}\n❑ Ext : MP3\n❑ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `❑ Title : ${media.title}\n❑ File Size : ${media.filesizeF}\n❑ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n❑ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❑ Title : ${media.title}\n❑ File Size : ${media.filesizeF}\n❑ Url : ${urls[text - 1]}\n❑ Ext : MP3\n❑ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		if(!isPremium && prem) return m.reply(mess.premium) 
		revLimit() 
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '❑ Media Url : '+result }, { quoted: m })
            }
            break
	    case 'couple': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
		if(!isPremium && prem) return m.reply(mess.premium) 
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            let Message = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wallpaper': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'Masukkan Query Title'
		        let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		        let Message = {
                    image: { url: result.image[0] },
                    caption: `❑ Title : ${result.title}\n❑ Category : ${result.type}\n❑ Detail : ${result.source}\n❑ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'wikimedia': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let Message = {
                    image: { url: result.image },
                    caption: `❑ Title : ${result.title}\n❑ Source : ${result.source}\n❑ Media Url : ${result.image}`
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let Message = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
	        case 'katabijak': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let anu = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                let teks = `*Author*: ${anu.hasil.author}\n*Quotes*: "${anu.hasil.quotes}"`
                hisoka.sendText(m.chat, teks, m)
            }
            break
            case 'katailham': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            	let anu = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`) 
            hisoka.sendText(m.chat, `"${anu.hasil.result}"`, m) 
            	}
            break
            case 'faktaunik': case 'dare': case 'truth': {
            	let anu = await fetchJson(`https://api.akuari.my.id/randomtext/${command}`)
            hisoka.sendText(m.chat, anu.hasil, m) 
            }
            break
           case 'write': 
case 'narutobanner': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
if (!text) return m.reply(`Example : ${prefix+command} Slemek`) 
m.reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let anu = await photooxy.photoOxy(link, text)
hisoka.sendImage(m.chat, anu, mess.done, m) 
}
break
/** case 'candy': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'fiction': 
case 'demon': 
case 'berry': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
if (!text) return m.reply(`Example : ${prefix+command} Slemek`) 
m.reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
//let anu = await textpro.textpro(link, text)
let anu = await fetchJson(`https://api.akuari.my.id/textpro/scraper-1?text=${text}&link=${link}`) 
hisoka.sendImage(m.chat, anu.respon, mess.done, m) 
}
break **/
            case 'shadow':
            case 'cup':
            case 'romantic':
            case 'smoke':
            case 'naruto':
            case 'tiktok':
            case 'butterfly':
            case 'metalic':
            case 'kayu':
            case 'horror':
            case 'permen':
            case 'silk':
            case 'batik':
            case 'nature3d':
            case 'summer3d':
            case 'fall':
            case 'neonlights': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/${command}?text=${text}`, mess.done, m) 
            }
            break
            case 'lovemessage': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/love_message?text=${text}`, mess.done, m)
            }
            break
            case 'glowingneon': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait)  
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/glowing_neon?text=${text}`, mess.done, m)
            }
            break
            case 'woddenboard': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/wodden_board?text=${text}`, mess.done, m)
            }
            break
            case 'flowerheart': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            let anu = await fetchJson() 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/flower_heart?text=${text}`, mess.done, m)
            }
            break
            case 'burnpaper': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/photooxy/burn_paper?text=${text}`, mess.done, m)
            }
            break
            case 'led': case 'christmas': case 'magma': case 'space': case 'transformer': case 'thunder': case 'cinematichorror': case 'summer': case 'summer2': case 'bussines': case 'lightglow': case 'batman': case 'sketch': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/${command}?text=${text}`, mess.done, m)
            }
            break
            case '3drainbow': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/3drainbow?text=${text}`, mess.done, m)
            }
            break
            case 'halloweenskeleton': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            if (!text) throw "Masukan teks!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/textpro/halloweenskeleton?text=${text}`, mess.done, m)
            }
            break
            case 'blackpink': case 'bear': case 'avengers': case 'angel': case 'mountain': case 'purple': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan teks!"
            	m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/ephoto/${command}?text=${text}`, mess.done, m) 
            }
            break
            case 'graffiti': case 'pornhub': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw `Masukan teks!\nContoh: ${prefix + command} teks|teks2`
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/ephoto/${command}?text=${text.split("|")[0]}&text_2=${text.split("|")[1]}`, mess.done, m) 
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nomor HP :* ${anu.message.nomer_hp}\n❑ *Angka Shuzi :* ${anu.message.angka_shuzi}\n❑ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❑ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama Suami :* ${anu.message.suami.nama}\n❑ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❑ *Nama Istri :* ${anu.message.istri.nama}\n❑ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama Anda :* ${anu.message.nama_anda.nama}\n❑ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❑ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\ni❑ *Sisi Positif :* ${anu.message.sisi_positif}\n❑ *Sisi Negatif :* ${anu.message.sisi_negatif}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Life Path :* ${anu.message.life_path}\n❑ *Destiny :* ${anu.message.destiny}\n❑ *Destiny Desire :* ${anu.message.destiny_desire}\n❑ *Personality :* ${anu.message.personality}\n❑ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `❑ *Nama Anda :* ${anu.message.nama_anda}\n❑ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❑ *Sisi Positif :* ${anu.message.sisi_positif}\n❑ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❑ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Lahir :* ${anu.message.hari_lahir}\n❑ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Lahir :* ${anu.message.hari_lahir}\n❑ *Rezeki :* ${anu.message.rejeki}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Analisa :* ${anu.message.analisa}\n❑ *Angka Akar :* ${anu.message.angka_akar}\n❑ *Sifat :* ${anu.message.sifat}\n❑ *Elemen :* ${anu.message.elemen}\n❑ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Analisa :* ${anu.message.analisa}\n❑ *Sektor :* ${anu.message.sektor}\n❑ *Elemen :* ${anu.message.elemen}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n❑ *Lahir :* ${anu.message.tahun_lahir}\n❑ *Gender :* ${anu.message.jenis_kelamin}\n❑ *Angka Kua :* ${anu.message.angka_kua}\n❑ *Kelompok :* ${anu.message.kelompok}\n❑ *Karakter :* ${anu.message.karakter}\n❑ *Sektor Baik :* ${anu.message.sektor_baik}\n❑ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'wangy': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            	if(!text) m.reply("Masukan nama!");
            else {
            let wangy = text.toUpperCase() 
            let wangi = text.toLowerCase() 
            let hehe = `${wangy} ${wangy} ${wangy} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${wangy} wangyy aku mau nyiumin aroma wangynya ${wangy} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${wangy} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${wangy} AAAAA LUCCUUUUUUUUUUUUUUU............ ${wangy} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${wangy} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${wangy} gw ... ${wangy} di laptop ngeliatin gw, ${wangy} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${wangi} aku gak mau merelakan ${wangy} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${wangy} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
            hisoka.sendText(m.chat, hehe, m);
            }
            }
            break
            case 'spam': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            	if(!isCreator) return m.reply(mess.owner) 
            	if(!text) return m.reply("Masukan nomor, pesan dan jumlah " + prefix + "spam nomor|pesan|jumlah\n\n" + prefix + "spam " + global.owner + "|slemek|10")
            else {
            let nomor = text.split("|")[0]
            let pesan = text.split("|")[1]
            let jumlah = text.split("|")[2]
            if (jumlah > 100) {
m.reply ("Jumlah tidak boleh lebih dari 100!")
} else {
	for (let i = 0; i < jumlah; i++) {
           hisoka.sendText(`${nomor}@s.whatsapp.net`, pesan) 
           await sleep(100) 
           }
           m.reply("Done!")
            }
            }
            }
            break
            case 'totalfitur':
            case 'totalmenu':
            case 'fiturtotal':
            case 'menutotal': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            	hisoka.sendText(m.chat, `Total fitur bot ini adalah *${total_fitur}*`, m);
            }
          break
        case 'servermc': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
          	if (!text) m.reply(`Masukan ip adress server! \n\nContoh: ${prefix}servermc ip:port\n*${prefix}servermc play.venitymc.com*\n*${prefix}servermc play.vernitymc.com:19132*`)
m.reply(mess.wait) 
	let anu = await fetchJson(`https://api.mcstatus.io/v2/status/bedrock/${text}`)
	let teks = `❑ Server IP: ${anu.host}:${anu.port}\n❑ Motd: ${anu.motd.clean}\n\n❑ Server Address: ${anu.ip_address}\n❑ Online: ${anu.players.online}/${anu.players.max}\n❑ Version: ${anu.version.name}`
          await hisoka.sendText(m.chat, teks, m)
          }
          break 
            case 'nsfw': {
                if (!m.key.fromMe && !isAdmins && !isCreator) return m.reply("Fitur khusus owner/admin group")
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].nsfw) return m.reply("Nsfw On")
                    db.data.chats[m.chat].nsfw = true
                    m.reply("Nsfw sudah on")
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].nsfw) return m.reply("Nsfw Off")
                    db.data.chats[m.chat].nsfw = false
                    m.reply("Nsfw sudah off")
                }
                }
                break
                case 'autorespon': case 'autorespond': {
                	if(!isCreator) return m.reply(mess.owner) 
                 if (args[0] === "on") {
                    if (global.autorespon) return m.reply(`Auto respond on`)
                    global.autorespon = true
                    m.reply(`Auto respon on`)
                } else if (args[0] === "off") {
                    if (!global.autorespon) return m.reply(`Auto respon off`)
                    global.autorespon = false
                    m.reply(`Auto respon off`)
                } 
                }
                break
                case 'autobio': {
                	if(!isCreator) return m.reply(mess.owner) 
                 if (args[0] === "on") {
                    if (global.autobio) return m.reply(`Auto bio on`)
                    global.autobio = true
                    m.reply(`Auto bio on`)
                } else if (args[0] === "off") {
                    if (!global.autobio) return m.reply(`Auto bio off`)
                    autobio = false
                    m.reply(`Auto bio off`)
                } 
                }
                break
                case 'welcome': {
                	if(!isCreator) return m.reply(mess.owner) 
                 if (args[0] === "on") {
                    if (global.welcome) return m.reply(`Detect welcome on`)
                    global.welcome = true
                    m.reply(`Detect welcome on`)
                } else if (args[0] === "off") {
                    if (!global.welcome) return m.reply(`Detect welcome off`)
                    global.welcome = false
                    m.reply(`Detect welcome off`)
                } 
                }
                break
                case 'goodbye': {
                	if(!isCreator) return m.reply(mess.owner) 
                 if (args[0] === "on") {
                    if (global.goodbye) return m.reply(`Detect goodbye on`)
                    global.goodbye = true
                    m.reply(`Detect goodbye on`)
                } else if (args[0] === "off") {
                    if (!global.goodbye) return m.reply(`Detect goodbye off`)
                    global.goodbye = false
                    m.reply(`Detect goodbye off`)
                } 
                }
                break
                case 'detectpromote': {
                	if(!isCreator) return m.reply(mess.owner) 
                 if (args[0] === "on") {
                    if (global.promote) return m.reply(`Detect promote & demote on`)
                    global.promote = true
                    m.reply(`Detect promote & demote on`)
                } else if (args[0] === "off") {
                    if (!global.promote) return m.reply(`Detect promote & demote off`)
                    global.promote = false
                    m.reply(`Detect promote & demote off`)
                } 
                }
                break
                case 'waifus':
                case 'nekos':
                case 'blowjob':
                case 'trap': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
                if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply("Nsfw Off")
                let anu = await fetchJson("https://api.waifu.pics/nsfw/" + command)
                if (command == "waifus") {
let anu = await fetchJson("https://api.waifu.pics/nsfw/waifu")
hisoka.sendImage(m.chat, anu.url, "🤨", m)
}
if (command == "nekos") {
let anu = await fetchJson("https://api.waifu.pics/nsfw/neko")
hisoka.sendImage(m.chat, anu.url, "🤨", m)
}
                hisoka.sendImage(m.chat, anu.url, "🤨", m)
            }
            break
           case 'ssweb': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            	if (!text) throw "Masukan link web!"
            m.reply(mess.wait) 
            hisoka.sendImage(m.chat, `https://api.akuari.my.id/other/ssweb?link=${text}`, mess.done, m) 
            }
            break 
            case 'haribaik': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❑ *Info :* ${anu.message.info}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Lahir :* ${anu.message.tgl_lahir}\n❑ *Hasil :* ${anu.message.result}\n❑ *Info :* ${anu.message.info}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Hari Naas :* ${anu.message.hari_naas}\n❑ *Info :* ${anu.message.catatan}\n❑ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Hari Lahir :* ${anu.message.hari_lahir}\n❑ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❑ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `❑ *Tanggal :* ${anu.message.tgl_memancing}\n❑ *Hasil :* ${anu.message.result}\n❑ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                let teks = `❑ Username: ${anu.hasil.username}\n❑ Like: ${anu.hasil.like}\n❑ Comment: ${anu.hasil.comment}\n❑ Share: ${anu.hasil.share}\n\n❑ Dekripsi: ${anu.hasil.deskripsi}`
                hisoka.sendMessage(m.chat, { video: { url: anu.hasil.download_mp4 }, caption: teks }, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.hasil.download_mp3 }, mimetype: 'audio/mpeg'}, { quoted: m })
            }
            break
            /**case 'mediafire': {
            	if(!text) throw "Masukan url!"
            m.reply(mess.wait) 
            let anu = await fetchJson(`https://api.akuari.my.id/downloader/mediafireDl?link=${text}`) 
            hisoka.sendFileUrl(m.chat, anu.link, anu.title, m) 
            }
            break **/
            case 'waifu':
            case 'cry':
            case 'kill':
            case 'hug':
            case 'pat':
            case 'lick':
            case 'kiss':
            case 'bite':
            case 'yeet':
            case 'neko':
            case 'bully':
            case 'bonk':
            case 'wink':
            case 'poke':
            case 'nom':
            case 'slap':
            case 'smile':
            case 'wave':
            case 'awoo':
            case 'blush':
            case 'smug':
            case 'glomp':
            case 'happy':
            case 'dance':
            case 'cringe':
            case 'highfive':
            case 'shinobu':
            case 'megumin':
            case 'handhold': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                 let anu = await fetchJson('https://api.waifu.pics/sfw/' + command)
    hisoka.sendMessage(m.chat, { image: { url: anu.url }, caption: mess.done }, { quoted: m })
    }
    break
    case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: mess.done }, { quoted: m })
            }
            break
            case 'randomanime':
            case 'animerandom':
    case 'shota':
					case 'husbu': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
    let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/${command}.json`) 
    if(command == "randomanime" || command == "animerandom") {
    	anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/random.json`)
    }
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: mess.done }, { qouted: m})
    }
    break
    case 'loli': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
    let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/loli.json`) 
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].loli }, caption: mess.done }, { qouted: m})
    }
    break
    case 'meme': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
    	let anu = await fetchJson(`https://api.akuari.my.id/other/meme`)
    hisoka.sendImage(m.chat, anu.image, anu.title, m) 
    }
    break 
    case 'happymod':{
    	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
if (!text) return m.reply(`Example ${prefix+command} Sufway surfer mod`)
m.reply(mess.wait)
let anu = await scp1.happymod(text) 
let capt = `*Happy mod search*\n\n`
for (let i of anu.data) {
            capt += `❑ Judul: ${i.judul}\n`
            capt += `❑ Rating: ${i.rating}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Happy mod search from: ${text}`, 
body: '',
thumbnailUrl: anu.data[0].thumb, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'recipe': case 'resep': {
	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
if(!text) return m.reply(`Example ${prefix+command} samosa`)
m.reply(mess.wait)
let anu = await scp1.cariresep(text)
let capt = `*Recipe search*\n\n`
for (let i of anu.data) {
            capt += `❑ Judul: ${i.judul}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Recipe search from: ${text}`, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
case 'readrecipe':{
	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
if(!text) return m.reply(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
m.reply(mess.wait)
let rain = await scp1.bacaresep(text)
let dty = `Recipe Below
❑ Title: ${rain.judul_nya}
❑ Time : ${rain.waktu_nya}
❑ Result : ${rain.hasil_nya}
❑ Degree of difficulty : ${rain.tingkat_kesulitan}
❑ Material :
${rain.bahan_nya}`
hisoka.sendImage(m.chat, rain.thumb_nya, dty, m) 
}
break
case 'mediafire':
if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
if(!text) return m.reply(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('The link you sent is not a mediafire link or the link is invalid!')
m.reply(mess.wait)
let medfr = await scp1.mediafire(text)
await hisoka.sendMessage(m.chat, {document:{url:medfr.link},jpegThumbnail : global.logo, fileName:`${medfr.judul.split("+").join(" ")}`, mimetype:`application/${medfr.mime}`},{quoted:m})
break
    case 'cosplay': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
    	let anu = await fetchJson(`https://api.akuari.my.id/randomimganime/cosplay`)
    hisoka.sendImage(m.chat, anu, mess.done, m) 
    }
    break
    case 'darkjokes':
    case 'darkmeme': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
    	let anu = await fetchJson(`https://api.akuari.my.id/randomimage/darkjokes1`) 
    hisoka.sendImage(m.chat, anu, mess.done, m) 
    }
    break
					case 'openai':
					case 'chatgpt': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
						if(!text) return m.reply("Masukan teks!") 
						m.reply(mess.wait) 
						let anu = await fetchJson(`https://api.akuari.my.id/ai/gpt?chat=${text}`) 
    hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: anu.respon, 
contextInfo: {
externalAdReply: {  
title: `ChatGPT-v3`, 
body: '',
thumbnailUrl: 'https://telegra.ph/file/3000b21a560d61856bb54.jpg', 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}}) 
}
						break
						case 'gbard':
						case'chatgbard':
						case 'chatgb': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
							if(!text) m.reply("Masukan teks!")
						else {
						m.reply(mess.wait) 
						let anu = await fetchJson(`https://api.akuari.my.id/ai/gbard?chat=${text}`)
						let teks = anu.respon
						hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: teks, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
						}
						break
						case 'aesthetic': case 'antiwork': case 'bike': case 'blackpinks': case 'boneka': case 'car': case 'cat': case 'doggo': case 'justina': case 'kpop': case 'pubg': case 'rose': case 'ryujin': case 'ulzzanggirl': case 'ulzzangboy': case 'wallhp': case 'wallml': {
							if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
		m.reply(mess.wait) 
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/${command}.json`) 
 if(command == "blackpinks") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/blackpink.json`) 
}
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: mess.done }, { quoted: m })
					}
					break
						case 'cyberspace': case 'gamewallp': case 'islamic': case 'mountains': case 'progamming': case 'technology': {
							if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
		m.reply(mess.wait) 
 if(command == "cyberspace") command = `CyberSpace`;
 if(command == "gamewallp") command = `GameWallp`;
 if(command == "islamic") command = `Islamic`;
 if(command == "mountains") command = `Mountain`;
 if(command == "programming") command = `Progamming`;
 if(command == "technology") command = `Technology`;
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/wallpaper/${command}.json`) 
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran] }, caption: mess.done }, { quoted: m })
					}
					break
					case 'cogan': case 'indonesia': case 'malaysia': case 'china': case 'thailand': case 'vietnam': case 'jepang': case 'korea': case 'asupan': case 'bocil': case 'gheayubi': case 'hijab': case 'kayes': case 'notnot': case 'panrika': case 'randomcecan': case 'randomcecan2': case 'santuy': case 'tiktokgirl': case 'ukhty': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
		m.reply(mess.wait) 
 let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/${command}.json`) 
 if(command == "cogan") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cogan.json`) 
}
if(command == "randomcecan") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/random.json`) 
}
if(command == "randomcecan2") {
anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/cecan/random2.json`) 
}
    let ran = Math.floor(Math.random() * anu.length)
    hisoka.sendMessage(m.chat, { image: { url: anu[ran].url }, caption: mess.done }, { quoted: m })
					}
					break
					case 'ahegao': case 'ass': case 'bdsm': case 'cuckold': case 'milf': case 'cum': case 'eba': case 'ero': case 'foot': case 'fendom': case 'gifs': case 'glasses': case 'hentai': case 'jahy': case 'nsfwmanga': case 'masturbation': case 'neko2': case 'nsfwloli': case 'orgy': case 'panties': case 'pussy': case 'tentacles': case 'thighs': case 'yuri': case 'zettai': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
						if (!db.data.chats[m.chat].nsfw && m.isGroup) return m.reply("Nsfw Off")
						let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/nsfw/${command}.json`) 
						if(command == "nsfwmanga") {
							anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/image/nsfw/manga.json`) 
							}
						hisoka.sendImage(m.chat, anu[Math.floor(Math.random() * anu.length)].url, mess.done, m) 
					}
					break
					case 'ffstalk':{
if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		revLimit() 
if (!text) return m.reply(`Example ${prefix+command} 946716486`)
m.reply(mess.wait)
anu = await ffstalk.ffstalk(`${text}`)
m.reply(`Free Fire Stalker

Id : ${anu.id}
Nickname : ${anu.nickname}`)
}
break 
case 'igstalk':{
if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		revLimit() 
if (!text) return m.reply(`Example ${prefix+command} unicorn_xeon`)
m.reply(mess.wait)
aj = await igstalk(`${q}`)
hisoka.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*Instagram Stalker*

❑ Full name : ${aj.fullname}
❑ Username : ${aj.username}
❑ Post : ${aj.post}
❑ Followers : ${aj.followers}
❑ Following : ${aj.following}
❑ Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ghstalk': case 'githubstalk':{
if (!text) return m.reply(`Example ${prefix+command} AnandaGTPS`)
m.reply(mess.wait)
aj = await githubstalk.githubstalk(`${text}`)
hisoka.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`Github Stalker

❑ Username : ${aj.username}
❑ Nickname : ${aj.nickname}
❑ Bio : ${aj.bio}
❑ Id : ${aj.id}
❑ Nodeid : ${aj.nodeId}
❑ Url Profile : ${aj.profile_pic}
❑ Url Github : ${aj.url}
❑ Type : ${aj.type}
❑ Admin : ${aj.admin}
❑ Company : ${aj.company}
❑ Blog : ${aj.blog}
❑ Location : ${aj.location}
❑ Email : ${aj.email}
❑ Public Repo : ${aj.public_repo}
❑ Public Gists : ${aj.public_gists}
❑ Followers : ${aj.followers}
❑ Following : ${aj.following}
❑ Created At : ${aj.ceated_at}
❑ Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
					case 'adam': case 'ayyub': case 'daud': case 'dzulkifli': case 'harun': case 'hud': case 'ibrahim': case 'idris': case 'ilyas': case 'ilyasa': case 'isa': case 'ishaq': case 'ismail': case 'luth': case 'muhammad': case 'musa': case 'nuh': case 'sholeh': case 'sulaiman': case 'syuaib': case 'yahya': case 'yaqub': case 'yunus': case 'yusuf': case 'zakariya': {
						if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
		let anu = await fetchJson(`https://raw.githubusercontent.com/AnandaGTPS/database/main/kisahNabi/${command}.json`) 
		let teks = `❑ Nama: ${anu.name}\n❑ Umur: ${anu.usia}\n❑ Tahun kelahiran: ${anu.thn_kelahiran}\n\n${anu.description}`
		hisoka.sendImage(m.chat, anu.image_url, teks, m) 
		}
		break
					case 'infogempa': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/gempa`) 
						let teks = `❑ Wilayah: ${anu.result.wilayah}\n\n❑ Potensi: ${anu.result.potensi}\n\n❑ Tanggal: ${anu.result.tanggal}\n❑ Jam: ${anu.result.jam}\n❑ Magnitude: ${anu.result.magnitude}\n❑ Kedalaman: ${anu.result.kedalaman}\n❑ Lintang: ${anu.result.lintang}\n❑ Bujur: ${anu.result.bujur}`
						hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: teks, 
contextInfo: {
externalAdReply: {  
title: `Info Gempa`, 
body: '',
thumbnailUrl: anu.result.image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
break
					case 'cnnnews': case 'cnninfo': case 'infocnn': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/cnn`)
            let capt = ``
            for (let i of anu.result) {
            capt += `❑ Judul: ${i.judul}\n`
            capt += `❑ Url: ${i.link}\n`
            capt += `❑ Thumbnail Url: ${i.thumb}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `CNN News`, 
body: '',
thumbnailUrl: anu.result[0].thumb, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'antaranews': case 'antarainfo': case 'infoantara': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/antaranews`)
            let capt = ``
            for (let i of anu.result) {
            capt += `❑ Judul: ${i.title}\n\n`
            capt += `❑ Label: ${i.label}\n`
            capt += `❑ Date: ${i.date}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Antara News`, 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'cnbnews': case 'cnbinfo': case 'infocnb': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/cnbindonesia`)
            let capt = ``
            for (let i of anu.result) {
            capt += `❑ Judul: ${i.title}\n\n`
            capt += `❑ Label: ${i.label}\n`
            capt += `❑ Date: ${i.date}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `CNB Indonesia News`, 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'tsunaminews': case 'tsunamiinfo': case 'infotsunami': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/tsunami`)
            let capt = ``
            for (let i of anu.result) {
            	let tanggal = i.tangal.split(" ")[0]
            let jam = i.tangal.split(" ")[1]
            capt += `❑ Wilayah: ${i.wilayah}\n`
            capt += `❑ Tanggal: ${tanggal}\n`
            capt += `❑ Jam: ${jam} WIB\n`
            capt += `❑ Magnitude: ${i.magnitude}\n`
            capt += `❑ Kedalaman: ${i.kedalaman}\n`
            capt += `❑ Lintang: ${i.lintang}\n`
            capt += `❑ Bujur: ${i.bujur}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Info Tsunami`, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'kompasnews': case 'kompasinfo': case 'infokompas': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
						let anu = await fetchJson(`https://api.akuari.my.id/info/kompas`)
            let capt = ``
            for (let i of anu.result) {
            	let tanggal = i.date.split(",")[0]
            let jam = i.date.split(",")[1]
            capt += `❑ Judul: ${i.title}\n\n`
            capt += `❑ Tanggal: ${tanggal}\n`
            capt += `❑ Jam: ${jam}\n`
            capt += `❑ Label: ${i.label}\n`
            capt += `❑ Link: ${i.link}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Kompas News`, 
body: '',
thumbnailUrl: anu.result[0].image, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'reportbug': case 'report':{
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
if (!text) throw 'Teksnya?' 
m.reply(mess.wait)
await sleep(3000) 
m.reply('Done! report mu sudah terkirim ke owner')
if (global.log) {
hisoka.sendMessage(`${global.owner[0]}.@s.whatsapp.net`, { text: `======[ *Report* ]======\n❑ From: @${m.sender.split('@')[0]}\n❑ Tanggal: ${tanggal}\n❑ Jam: ${WIB} WIB\n\n❑ Pesan: ${text}`, mentions: [m.sender]}, { quoted: m })
} else {
	hisoka.sendMessage(`${global.owner[0]}@s.whatsapp.net`, { text: `======[ *Report* ]======\n❑ From: @${m.sender.split('@')[0]}\n❑ Tanggal: ${tanggal}\n❑ Jam: ${WIB} WIB\n\n❑ Pesan: ${text}`, mentions: [m.sender]}, { quoted: m })
	}
}
break     
            case 'asmaulhusna': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            	if(!text) {
            	let asmaul = await fetchJson("https://raw.githubusercontent.com/AnandaGTPS/database/main/text/AsmaulHusna.js") 
            let ran = Math.floor(Math.random() * asmaul.length) 
            let anu = asmaul[ran]
            let teks = `*Number*: ${anu.number}\n*Latin*: ${anu.latin}\n*Arab*: ${anu.arab}\n*ID*: ${anu.translate_id}\n*EN*: ${anu.translate_en}`
            hisoka.sendImage(m.chat, urlmenu2, teks, m) 
            } else if(!isNaN(text) && text < 100 && text > 0) {
            	let asmaul = await fetchJson("https://raw.githubusercontent.com/AnandaGTPS/database/main/text/AsmaulHusna.js") 
            let anu = asmaul[text - 1]
            let teks = `*Number*: ${anu.number}\n*Latin*: ${anu.latin}\n*Arab*: ${anu.arab}\n*ID*: ${anu.translate_id}\n*EN*: ${anu.translate_en}`
            hisoka.sendImage(m.chat, urlmenu2, teks, m) 
            } else {
            	m.reply(`Asmaul husna ke *${text}* tidak di temukan, mohon masukan nomor *1 - 99*`)
            }
            }
            break
            case 'soundcloud': case 'scdl': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/scdl?link=${text}`)
                let msg = await hisoka.sendImage(m.chat, anu.thumb, `⭔ Title : ${anu.title}\n⭔ Url : ${anu.link}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.link }, mimetype: 'audio/mpeg', fileName: anu.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                let Message = {
                    video: { url: anu.HD || anu.SD },
                    caption: anu.desc
                }
                hisoka.sendMessage(m.chat, Message, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                let Message = {
		    image: { url: anu.thumb },
                    caption: anu.desc
                }
                let msg = await hisoka.sendMessage(m.chat, Message, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.audio }, fileName: 'twittermp3.mp3', mimetype: 'audio/mpeg' }, { quoted: msg })
            }
            break
            case 'pixiv':
            case 'pixivsearch':
            case 'searchpixiv': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            	if (!text) throw "Masukan query!"
            else {
            	let anu = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${text}`) 
            let ran = Math.floor(Math.random() * anu.result.length)
            let teks = `*Author*: ${anu.result[ran].author}\n\n*Title*: ${anu.result[ran].title}`
            hisoka.sendImage(m.chat, anu.result[ran].urls.regular, teks, m) 
            }
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl3?link=${text}`)
                hisoka.sendMessage(m.chat, { video: { url: anu.hasil.hd }, caption: `⭔ Title : ${anu.hasil.title}`}, { quoted: m })
            }
            break
        case 'ringtone': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'hadits': case 'hadis': case 'hadist': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                m.reply(`\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKetik ${prefix}start Untuk Mencari Partner\`\`\``)
            }
			break
            case 'keluar': case 'leave': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Ketik ${prefix}start Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    m.reply(`\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, ketik ${prefix}keluar Untuk Menghentikan Sesi Anonymous Anda\`\`\``)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    m.reply(`\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, ketik ${prefix}start Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    await hisoka.sendText(room.a, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendText(room.b, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``)
                }
                break
            }
            case 'public': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
                hisoka.sendContact(m.chat, global.owner, m)
                }
                break
            case 'playstore': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit)  
		revLimit() 
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let anu = await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}`)
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of anu.hasil) {
            teks += `❑ Name : ${i.title}\n`
            teks += `❑ Link : ${i.url}\n`
            teks += `❑ Developer : ${i.developer}\n`
            teks += `❑ Score : ${i.scoreText}\n\n────────────────────\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: teks,
contextInfo: {
externalAdReply: {  
title: `Playstore Search From: ${text}`, 
body: '',
thumbnailUrl: anu.hasil[0].icon, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'drakor': {
               	if(isBanned) return m.reply(mess.ban) 
		userData() 
		if(limited) return m.reply(mess.endLimit) 
		if(!isPremium && prem) return m.reply(mess.premium)  
		revLimit() 
            if (!text) throw `Example : ${prefix + command} love`
            let anu = await fetchJson(`https://api.akuari.my.id/search/drakor?query=${text}`)
            let capt = ``
            for (let i of anu.hasil) {
            capt += `❑ Judul: ${i.judul}\n`
            capt += `❑ Years: ${i.years}\n`
            capt += `❑ Genre: ${i.genre}\n`
            capt += `❑ Url: ${i.url}\n`
            capt += `❑ Thumbnail Url: ${i.thumbnail}\n\n────────────────────\n\n`
            }
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: capt, 
contextInfo: {
externalAdReply: {  
title: `Drakor search from: ${text}`, 
body: '',
thumbnailUrl: anu.hasil[0].thumbnail, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menu': 
            case 'help':
            case 'list':
            case 'listmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + menu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
            break
            case 'menuall': case 'allmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + allCmd,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menugc': case 'menugrup': case 'menugroup': case 'groupmenu': case 'grupmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Group Menu*
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menudownload': case 'menudl': case 'menudown': case 'dlmenu': case 'downloadmenu': case 'downmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Downloader Menu*
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menusearch': case 'searchmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Search Menu*
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menustalk': case 'stalkmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Stalker Menu*
│
${cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menunews': case 'newsmenu': case 'menuberita': case 'beritamenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *News Menu*
│
${cmdNews.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menurandomtext': case 'randomtextmenu': case 'rantextmenu': case 'menurantext': case 'randtextmenu': case 'menurandtext': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Random Text Menu*
│
${cmdRanText.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menurandomimage': case 'randomimagemenu': case 'ranimagemenu': case 'menuranimage': case 'randimagemenu': case 'menurandimage': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Random Image Menu*
│
${cmdRanImg.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menuai': case 'aimenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *AI Menu*
│
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menuoxy': case 'menuphotooxy': case 'photooxymenu': case 'oxymenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Photo Oxy Menu*
│
${cmdOxy.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menutextpro': case 'textpromenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Text Pro Menu*
│
${cmdTextPro.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                userData() 
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menuephoto': case 'menuephoto360': case 'ephotomenu': case 'ephoto360menu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Ephoto Menu*
│
${cmdEphoto.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            case 'menufun': case 'funmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Fun Menu*
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            if(isBanned) return m.reply(mess.ban) 
                userData() 
            case 'menuprimbon': case 'primbonmenu': {
                let anu = `┌──✧ *Primbon Menu*
│
${cmdPrimbon.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menuanime': case 'animemenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Anime Menu*
│
${cmdAnime.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
                }
                break
                case 'menunsfw': case 'nsfwmenu': {
                	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Nsfw Menu*
│
${cmdNsfw.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
                }
                break
                case 'menukisahnabi': case 'kisahnabimenu': case 'kisahnabi': {
                	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Kisah Nabi Menu*
│
${cmdNabi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
                }
                break
                case 'menuasupan': case 'asupanmenu': {
                	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Asupan Menu*
│
${cmdAsupan.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
                }
                break
            case 'menuconvert': case 'menuconverter': case 'convertermenu': case 'convermenu': case 'convmenu': case 'menuconv': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
               let anu = `┌──✧ *Convert Menu*
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menumain': case 'mainmenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Main Menu*
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break 
            case 'menuowner': case 'ownermenu': {
            	if(isBanned) return m.reply(mess.ban) 
                userData() 
                let anu = `┌──✧ *Owner Menu*
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│❑ ${prefix}`+ v).join('\n')}
│
└───────⁠✧`
                hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: info + anu,
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu2, 
sourceUrl: linkgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
            }
            break
            default:
            if (isBanned) return
            if (global.autorespon && !m.isGroup) {
            let autores = await fetchJson(`https://simsimi.fun/api/v2/?mode=talk&lang=id&message=${command + " " + text}&filter=false`)  
            hisoka.sendMessage(m.chat, {
document: xlsx,
fileName: botname, 
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: total_fitur, 
caption: autores.success, 
contextInfo: {
externalAdReply: {  
title: botname, 
body: '',
thumbnailUrl: urlmenu, 
sourceUrl: linkgc,
mediaType: 2,
renderLargerThumbnail: false
}}})
 }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
