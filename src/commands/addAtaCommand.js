const database = require('../database');

module.exports = async (message, args, client) => {
  if(!args.length) {
    return message.reply("Você precisa enviar seu nome logo em seguida ex: !p Pedro Afonso")
  }
  const fullName = args.join(' ');
  database.addName(fullName);
}