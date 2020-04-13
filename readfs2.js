// Make the files in the file folder into half
// loop through all the files in a folder
//read all the files async
//half the contents
//write to solutions folder

var fs = require('fs');
var path = require('path');
var dirname = path.join(__dirname + '/files');

var files = fs.readdirSync(dirname);

files.forEach(fileName => {
    var filePath = path.join(dirname, fileName);
    fs.stat(filePath, 'utf8', (err, stats) => {
        if(err) throw err;
        fs.truncate(filePath, stats.size/2, (err) => {
            if(err) throw err;
            console.log("Written successfully");
        });
    });
});
