/*CMD
  command: [📎] Referral Link
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*╔ [👤] User = " +user.first_name+ " \n║\n╠ [👥] Total Invites = "+refList.length+" Users\n║\n╠ [➕] Per Referral 2 Points\n║\n╠ [❕] Share Link to Earn Point \n║\n╚ [📎] Referral Link = "+reflink+"*");

}
