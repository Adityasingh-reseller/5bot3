/*CMD
  command: /setplan
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [{ title : "[š ] Set Plan" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*ā  [ā] Plan Settings\nā\nā [š¤] User = "+user.first_name+"\nā [šļø] User ID = "+user.telegramid+"\nā [š³] Plan =* "+wallet+"\nā\n*ā [ā]If Your Account Wallet Is Undefined Set It By Click In Below Button [ā¬ļø]*")
