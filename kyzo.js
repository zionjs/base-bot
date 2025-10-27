require('./config');
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const ytdl = require('@vreden/youtube_scraper');
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genshindb = require("genshin-db")
const jsobfus = require("javascript-obfuscator")
const { SnackVideo } = require('./lib/function/snackvideo')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { tiktokSearchVideo } = require('./lib/scraper');
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const {
	UploadFileUgu
} = require('./lib/uploaderr')
const { CatBox, TelegraPh, floNime, uptotelegra } = require('./lib/uploader');
let db_respon_list = JSON.parse(fs.readFileSync('./lib/list-message.json'));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
const { msgFilter } = require('./lib/antispam')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, RekyzoectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediakyzoInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DiskyzoectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');

module.exports = kyzo = async (kyzo, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? kyzo.user.id.split(":")[0] + "@s.whatsapp.net" || kyzo.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `${setprefix}`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const pler = JSON.parse(fs.readFileSync('./command/idgrup.json').toString())
        const aksesGB = isGroup ? pler.includes(m.chat) : false
        const botNumber = await kyzo.decodeJid(kyzo.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const kyzodev = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await kyzo.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qkontak = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize,
            randomKarakter
            } = require('./lib/myfunction');
            
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            kyzo.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
//
//============= [ COMMANDS ] ====================================================
        switch (command) {
case "x": {
m.reply("Zion")
}
break
            default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                if (budy.startsWith('>')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
