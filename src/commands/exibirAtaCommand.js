const database = require('../database');

module.exports = async (message, args, client) => {
  const names = database.getNames();
  console.log(names);
  if(!names.length) {
    return message.reply("Ainda não tem ninguém escrito na ata")
  }

  let text = "\n\n**ATA DOS ALUNOS**\n\n";
  
  for(let [ count, name ] of Object.entries(names)) {
    text += `${parseInt(count)+1} - ${name} \n`;
  }

  message.reply(text).then(msg => msg.delete({ timeout: 30000 }));
}