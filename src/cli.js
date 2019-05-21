module.exports = {
  start () {
    require('yargs')
    .command('crnl-scaffold <args>', 'loading template from generator', (yargs) => {
      console.log("yargs", yargs)
    })
    .option('verbose', {
      alias: 'v',
      default: false
    })
    .argv
  }
}
