/*CMD
  command: tk
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

var b = 
Libs.Random.randomInt(100,999999)
var code = user.telegramid +"ZEE5"+b
var gift = User.getProperty("gift")
var button = [{ title : "Share" , url : "https://t.me/share/url?text=╔ [🎟] Code - "+ code +"\n╠ [❕] Reedem At Reedem Code Button \n╚ @"+bot.name }]
Bot.sendInlineKeyboard(button,"*╔ [√] Reedem Your Token\n║\n╚ [{}]Code-=  " + code + "*")
Bot.setProperty(code, gift,"integer")

