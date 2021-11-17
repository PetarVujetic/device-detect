const express = require('express');
const app = express();
const UAParser = require('ua-parser-js');
var parser = new UAParser();


app.use('/getDevice', (req, res) => {
    var ua = req.headers['user-agent'];     // user-agent header from an HTTP request
    console.log(parser.setUA(ua).getResult());
    res.status(200).json({ msg: parser.setUA(ua).getResult()});
})


app.listen(8000, ()=>{
    console.log("Server Listening");
})