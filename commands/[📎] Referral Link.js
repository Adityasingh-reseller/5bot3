/*CMD
  command: [š] Referral Link
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
Bot.sendMessage("*ā [š¤] User = " +user.first_name+ " \nā\nā  [š„] Total Invites = "+refList.length+" Users\nā\nā  [ā] Per Referral 2 Points\nā\nā  [ā] Share Link to Earn Point \nā\nā [š] Referral Link = "+reflink+"*");

}
