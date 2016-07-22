// Collections
App.Collections.Subject = Backbone.Collection.extend({
  model: App.Models.Subject
});

var subj;

function csvToJSON( csv ) {
  var result = [];
  var lines = csv
  var headers = lines[0]

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentLine = lines[i]

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }

  subj = JSON.stringify(result);
};

function parseCSV(url, callback) {
  Papa.parse(url, {
    download: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: function(results) {
      callback(results.data);
    }
  });
};

parseCSV("source/subjects.csv", csvToJSON);

var subjectCollection = new App.Collections.Subject({})
