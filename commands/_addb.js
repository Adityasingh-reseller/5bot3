/*CMD
  command: /addb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]* _Sent User Id to add Balance_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1179629135"
var key2 = "1960533911" 
if (user.telegramid == key || user.telegramid == key2){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bab");
}else{
return
}
