console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];
console.log(argv);

console.log('Command: ', command,'\n'); 
if (command === 'add') {
  notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  notes.remove(argv.title);
} else if (command === undefined) {
    console.log("please input what to do ! \n");
  }else {
  console.log('Command not recognized');
}
const manage_json = require("./playground/json_manage.js");

