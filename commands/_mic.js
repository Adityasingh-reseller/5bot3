/*CMD
  command: /mic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[📢] Sent message to Broadcast*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1179629135"
var key2 = "1960533911" 
if (user.telegramid == key || user.telegramid == key2){
Bot.runAll({ 
command: "post",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*[📨] Message Sended To All Users*")
}else{
Bot.sendMessage("*[ ! ] Bot By @Firerepo*")
}
