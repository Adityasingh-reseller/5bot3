/*CMD
  command: /bab
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[ā¹]* _How Much Balance you want To Add_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "1179629135"
var key2 = "1960533911" 
if (user.telegramid == key || user.telegramid == key2){
let amount = parseFloat(message);
let tgid = User.getProperty("id");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*ā [ā] Succesfully Added Balance* \n*ā [š¤] User = "+tgid+"\nā[š°] Amount= "+amount+"*");
}else{
return
}
