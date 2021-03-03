module.exports = [
  {
    names: ['ata', 'a'],
    description: "Exibir ata",
    run: require('./commands/exibirAtaCommand')
  },
  {
    names: ['limparata', 'lp'],
    description: "Limpar ata",
    run: require('./commands/limparAtaCommand')
  },
  {
    names: ['presente', 'p'],
    description: "Adicionar presença a ata",
    run: require('./commands/addAtaCommand')
  }
]