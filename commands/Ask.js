/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[โ]* _Enter Your Message_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*[โ] Message Sent To Admin As = "+message+"*")
Bot.sendMessageToChatWithId(-1001444605325, "*โ [๐ฑ]New Support Message From User \nโ\nโ  [+] User =* ["+user.first_name+"](tg://user?id="+user.telegramid+")\nโ\nโ  [รท] Telegram id = "+user.telegramid+"\nโ\n*โ [โ] Message = "+message+"*")
