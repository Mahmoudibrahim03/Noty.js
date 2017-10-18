console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];
console.log(argv);

console.log('Command: ', command,'\n'); 
switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    break;
  case 'read':
    console.log('Reading note');
    break;
  case 'remove':
    notes.remove(argv.title);
    break;
  case 'list':
    notes.getAll();
    break;
  case undefined:
    console.log("please input what to do ! \n");
    break;
  default:
    console.log('Command not recognized');
    break;
}
