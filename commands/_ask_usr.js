/*CMD
  command: /ask_usr
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[@]* _Sent User Id To Give Account_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("1960533911",message,"string")
Bot.runCommand("Message")
