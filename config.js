const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263775614627";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Don-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "DON A-MD",
  ownername:process.env.OWNER_NAME|| "Don Tanatswa",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_24_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3U2xubHZsNDEzV3ZZR3FNNUpCTzJIbC9iR0E3TWZHeFRJOCswbXIyUVNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NTYxNDYyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzU4MzlFMjkxQTE3MjFGOTY0OEM4Q0IyMUZGRTBGMzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5MTA2NjcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc1NjE0NjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MjdGQjk0NDEzOTI2ODRDREQ3RTdDMTAzQjQyMkJENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjkxMDY2NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVM2OExVVGlRc1dNOEppSGZUYWhiUVwiLFxuICBcInBob25lSWRcIjogXCJlMGY0YjVjNC01Mjk4LTQ4MDktYTE2Ni1jZjdlYjg5OWIwZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTkwLFxuICAgICAgMTY0LFxuICAgICAgMTc0LFxuICAgICAgMTksXG4gICAgICA2NSxcbiAgICAgIDI0LFxuICAgICAgMTYxLFxuICAgICAgMjUwLFxuICAgICAgMTU2LFxuICAgICAgNTIsXG4gICAgICAyNDgsXG4gICAgICAzOCxcbiAgICAgIDIwLFxuICAgICAgMTcsXG4gICAgICA2LFxuICAgICAgMTIzLFxuICAgICAgNDksXG4gICAgICAxMTcsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxNjEsXG4gICAgICAyMjMsXG4gICAgICAxNjUsXG4gICAgICAxNTgsXG4gICAgICA1NCxcbiAgICAgIDM1LFxuICAgICAgMTYyLFxuICAgICAgMjE5LFxuICAgICAgMjEzLFxuICAgICAgMjE5LFxuICAgICAgNzAsXG4gICAgICAxNjIsXG4gICAgICAyNDgsXG4gICAgICA0OCxcbiAgICAgIDExMyxcbiAgICAgIDg1LFxuICAgICAgMzcsXG4gICAgICA1NixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RlFFNjE0OVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc1NjE0NjI3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0NTQxNzgwOTEwOTE6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Qk1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QUjk4VUdFT21sd0xnR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic3ZET1VmMzFkTEVsWUEzMDNXcVRKLzhYT2hXOWt0NjRRK1FjcjNaN2xGQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPTTZkZkppbkRaYTFkOGQ4bFZCTmJtUTRpdFp3blVJRmtaTFZEZGVnVGhjZlNoc1JqWlRGUm4zRm82dUpSSDhLZ1ZqUW5idEtVZmx5cEk4WHhlR0RBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKQmVPOG9GdVErQzVtakU0UmlXNDQvMWx4K215b0V1K3VGVkV2MlgzNlN2TnNuZUEyTFRzODJtSEhUbnlUd1FrZ1FDdjYxRjN0dkpYaUlUdVpUWXJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzU2MTQ2Mjc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MTA2NjY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1RzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHVHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3VTliK2UxWkFMZytFUHkrVUpnSXRXZ2FQN2ZrRjRxUWdKaENBTEpxbHRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTcyNzYzNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjgyODA1NDQyMVwifSIKfQ==",   
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
