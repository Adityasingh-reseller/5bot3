/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[✎]* _Enter Your Message_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*[✒] Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(-1001444605325, "*╔ [📱]New Support Message From User \n║\n╠ [+] User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\n║\n╠ [÷] Telegram id = "+user.telegramid+"\n║\n*╚ [✒] Message = "+message+"*")
