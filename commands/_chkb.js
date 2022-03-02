/*CMD
  command: /chkb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]* _Sent User Id to check Balance_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1179629135"
var key2 = "1960533911" 
if (user.telegramid == key || user.telegramid == key2){if (message=="[×] Cancel"){
Bot.runCommand("Dev");
}else{
var id = message; 
var user_bal = Libs.ResourcesLib.anotherUserRes("balance" , tgid);
Bot.sendMessage("*[$] User Balance = "+user_bal.value(2).toFixed(2)+"*")
}
