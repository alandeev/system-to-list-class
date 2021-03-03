const database = require('../database');

module.exports = async (message, args, client) => {
  database.clearNames();
  message.reply('Ata limpa com sucesso!');
}