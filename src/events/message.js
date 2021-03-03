const commands = require('../commands');

module.exports = (message, client) => {
  const { author, content } = message;
  if(author.bot) return;

  if(content[0] == '!'){
    const args = message.content.slice(1).trim().split(' ');
    const cmdName = args.shift().toLowerCase();
    const command = commands.find(cmd => cmd.names.find(name => name === cmdName));
    console.log({command})
    if(command) {
      return command.run(message, args, client);
    }
  }
}