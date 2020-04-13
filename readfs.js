// Make the files in the file folder into half and put the solution in solution folder
// loop through all the files in a folder
//read all the files async
//half the contents
//write to solutions folder

var fs = require('fs');

fs.readdir('./files', (err, files) => {
    if(err) throw err;
    console.log(files);
    files.forEach((fileName, index) => {
        fs.readFile('./files/' + fileName,'utf8', (err, data) => {
            if(err) throw err;
            console.log(index + ". fileName: ", fileName + '\r\n');
            console.log(data);
            data = data.slice(0, parseInt(data.length / 2));
            console.log("//////////////////////////");
            console.log(data);
            if (!fs.existsSync('./solution/')){
                fs.mkdirSync('./solution/');
            }
            fs.writeFile('./solution/' + fileName, data, (err) => {
                if(err) throw err;
                console.log("Written successfully")
            });
        })
    })
})