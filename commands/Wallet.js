/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*ā Send Your Plan Type
ā  [Basic - 6 Points]
ā [Family - 10 Points]*

_Write the Name of Plan_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*ā [š³] Your Deezer Plan Set To "+message+"\nā  [š±] To Change The Plan Type /setplan \nā [š] Now You Can Generate Account*")
