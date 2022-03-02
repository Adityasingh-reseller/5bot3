/*CMD
  command: /brpic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[#]* _Sent Photo With Caption_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1179629135"
var key2 = "1960533911" 
if (user.telegramid == key || user.telegramid == key2){
Bot.runAll({ 
command: "Photo",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*[#] Photo Sended To All Users.*")
}else{
Bot.sendMessage("*[ ! ] Bot By @Firerepo*")
}
