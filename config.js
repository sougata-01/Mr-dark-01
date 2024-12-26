require('dotenv').config(); 

global.owner = process.env.OWNER.split(','); 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "{"noiseKey":{"private":{"type":"Buffer","data":"2I0bYcCU5HTcrWEVIRyQDCds+XL0EbfBnCtsG3Wz2ls="},"public":{"type":"Buffer","data":"Pp6kOeOwQAgAmzg3kWSmyFW4E+c+ht2S/+92jJhzzHU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cJCk2wdwfKIC5xJz52T89sfj0TEou0ZAgePobuTWV1w="},"public":{"type":"Buffer","data":"1VTlwK/7Ycut8hh5rsc6QdF1By+sR+Aa4xulvTsQwiQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"0LwdT63y6/U4FJ/mso2r/wbJ+EYmC0e0CiASfWt8Mkg="},"public":{"type":"Buffer","data":"d2PF/e/yPWIczJRrksoQeU0P9OKw+BYvRvROlz1rxS0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"IDRIRzsdpAywBKZtCGzp7QDRhLUCcrG9NvmYNNYpD1Y="},"public":{"type":"Buffer","data":"+5t3wrchXC60j+eqy1JYDPwyViFPSKWvrMYrIqVrJTE="}},"signature":{"type":"Buffer","data":"qR/0FNbIgx1TcuYmdTWA8+85gJ3jIfCLALP6/lb4RokaUu77KLqXIF2Qlie893aAu63mTwVkUkDEHSHe50M4CQ=="},"keyId":1},"registrationId":45,"advSecretKey":"oC989+d1y9kTNgBeGPI25BGpytbAFDEgBsYDwq0Dpr8=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"vubYPE0eQum3snuioKLXbg","phoneId":"c24d2e8d-d54e-4788-b8ac-d9c55d91e308","identityId":{"type":"Buffer","data":"wcC3Lmjoc2bZ72t1jXeUbodnNks="},"registered":true,"backupToken":{"type":"Buffer","data":"RzlsjEGeVfTDfhK5gMFuif4xx3o="},"registration":{},"pairingCode":"FGE29PE3","me":{"id":"917479367307:17@s.whatsapp.net"},"account":{"details":"CMCLsE4QiKO2uwYYASAAKAA=","accountSignatureKey":"mq7oNSHl5otNOKrgBz33DX+VTXf/IOkb/9lKVSNnnRI=","accountSignature":"LKeVjicLj47KnXyKUhDdbUp/0KH7UjjaTxZEYVfXZU9s5CQWMKJV2tp/FmYNZ6zRiMuVBbwO9UWaRZbTwVgYAw==","deviceSignature":"jG55cAUtQ2gHPTTYVZ9MNX8YlMoaK8lONV4a7/fPpg//ELA+GyMgpwkvlKJfJqByl9oZs4YF8Utb5QDsTCg/BA=="},"signalIdentities":[{"identifier":{"name":"917479367307:17@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZqu6DUh5eaLTTiq4Ac99w1/lU13/yDpG//ZSlUjZ50S"}}],"platform":"android","lastAccountSyncTimestamp":1735233940,"myAppStateKeyId":"AAAAAIio"}";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`); 

global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
