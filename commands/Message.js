/*CMD
  command: Message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[@]* _Give Account_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = User.getProperty("1960533911")
Bot.sendMessageToChatWithId(id,message)
Bot.sendMessage("*[@] Sended To User*")
