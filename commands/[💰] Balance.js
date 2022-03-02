/*CMD
  command: [💰] Balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get(2);
Bot.sendMessage("*╔ [👤] User = "+user.first_name+"\n║\n╠ [💳] Balance = "+balance.value().toFixed(2)+" Points\n║ \n╚ [❕] Refer And Earn More*")
