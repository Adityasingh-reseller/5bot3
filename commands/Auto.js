/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 5 ){
Bot.sendMessage("*[ā] Minimum Generate is * _š Basic_ *Plan*")
}else{
if(message > balance.value()){
Bot.sendMessage("_[ā] Maximum Withdraw "+balance.value().toFixed(2)+" Rs_")
}else{
Bot.sendMessage("*ā [š®] Withdrawal Sent.\nā\nā  [ā] Transaction Details = Generating....\nā\nā  š³ Plan Details = - "+message+" Points \nā\nā  [šļø] User ID = "+user.telegramid+"\nā\nā [ā³] May Be It Will Take Upto 24 Hours \n        [ā] To Complete Your Order*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "-775115523", 
text: "*ā [ā] New Approved Payout \nā\nā  [ā] Status = Confirmed\nā  [š¤] User  = "+user.first_name+"\nā  [$] Plan = "+message+" Points \nā\nā  [šļø] User Id = "+user.telegramid+"\nā\nā [š¤] Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
