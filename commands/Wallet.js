/*CMD
  command: Wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*╔ Send Your Plan Type
╠ [Basic - 6 Points]
╚ [Family - 10 Points]*

_Write the Name of Plan_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*╔ [💳] Your Deezer Plan Set To "+message+"\n╠ [💱] To Change The Plan Type /setplan \n╚ [🔁] Now You Can Generate Account*")
