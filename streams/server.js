const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // fs.readFile('./bigfile', (err, data) => {
    //     if(err) throw err;
    //     res.end(data);
    // });
    const data = fs.createReadStream('./bigfile');
    data.pipe(res);
})

server.listen(8000);

