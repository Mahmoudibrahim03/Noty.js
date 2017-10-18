var fs = require("fs");
var exist = false;
// fetch data from json file
function fetchNote() {
  try {
    var data = fs.readFileSync("notes-data.json", 'utf8');
    notes = JSON.parse(data); // convert json to array
    return notes;
  } catch (error) {
    return [];
  }
}

// save data to json file
function saveNote(notes) {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes)); // add local array to JSON file  
}

function remove(title) {
  var notes = fetchNote();
  notes.forEach(function (element) {
    if (element.title == title) {
      notes.splice(notes.indexOf(element), 1);
      saveNote(notes);
      console.log("Element had been removed successfully");
    }
  });
}

var addNote = (title, body) => {
  var notes = fetchNote();
  var note = {
    title,
    body
  }
  notes.forEach(function (element) {
    if (element.title == title) {
      console.log("this title's already exist ..");
      exist = true;
    }
  });
  if (exist) {
    return 0;
  } else {
    notes.push(note); //add note to local array
    saveNote(notes);
    console.log("Note has been added sucessfully");
  }

}

var getAll = () => {
  fetchNote().forEach(function (element) {
    console.log(`Note title : ${element.title} \nNote content : ${element.body} \n`);
  });
}
module.exports = {
  addNote,
  getAll,
  remove
}