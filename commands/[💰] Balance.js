/*CMD
  command: [š°] Balance
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
Bot.sendMessage("*ā [š¤] User = "+user.first_name+"\nā\nā  [š³] Balance = "+balance.value().toFixed(2)+" Points\nā \nā [ā] Refer And Earn More*")
