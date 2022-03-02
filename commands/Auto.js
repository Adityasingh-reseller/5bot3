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
Bot.sendMessage("*[✋] Minimum Generate is * _🔘 Basic_ *Plan*")
}else{
if(message > balance.value()){
Bot.sendMessage("_[❌] Maximum Withdraw "+balance.value().toFixed(2)+" Rs_")
}else{
Bot.sendMessage("*╔ [📮] Withdrawal Sent.\n║\n╠ [❗] Transaction Details = Generating....\n║\n╠ 💳 Plan Details = - "+message+" Points \n║\n╠ [🆔️] User ID = "+user.telegramid+"\n║\n╚ [⏳] May Be It Will Take Upto 24 Hours \n        [✋] To Complete Your Order*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "-775115523", 
text: "*╔ [✅] New Approved Payout \n║\n╠ [✔] Status = Confirmed\n╠ [👤] User  = "+user.first_name+"\n╠ [$] Plan = "+message+" Points \n║\n╠ [🆔️] User Id = "+user.telegramid+"\n║\n╚ [🤖] Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
