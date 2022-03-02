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

var button = [{ title : "[🔠] Set Plan" , command : "Wallet" }]
var wallet = User.getProperty("wallet")
Bot.sendInlineKeyboard(button, "*╔  [⚙] Plan Settings\n║\n╠[👤] User = "+user.first_name+"\n╠[🆔️] User ID = "+user.telegramid+"\n╠[💳] Plan =* "+wallet+"\n║\n*╚ [❗]If Your Account Wallet Is Undefined Set It By Click In Below Button [⬇️]*")
