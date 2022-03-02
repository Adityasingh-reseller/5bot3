/*CMD
  command: post
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

var id = User.getProperty("1960533911")
var msg = options.msg
Bot.sendMessage("*[📢] Admin Message ~ [#Admin] \n╟―—————————————\n║\n╚ [✉️] "+msg+"*")
