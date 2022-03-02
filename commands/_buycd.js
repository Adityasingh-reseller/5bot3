/*CMD
  command: /buycd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *[₹]*_How Much Prize_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let balance = Libs.ResourcesLib.userRes ("balance")
if (balance.value () <message) {
Bot.sendMessage ("*[❗] Not Enough Point Increase First*")
} else {
if (message <1) {
Bot.sendMessage ("*[$] Minimum Token Price Is 1 *")
} else {
var value = message
function isNumeric (n) {
  return! isNaN (parseFloat (n)) && isFinite (n)
}
if (! isNumeric (value)) {
  Bot.sendMessage ("*[ ! ]Invaild value. Enter only numeric value. Try again *")
} else {
let gift =
User.getProperty ("gfit")
User.setProperty ("gift", message, "string")
balance.add (-message)
Bot.runCommand ("tk")
}
}
}
