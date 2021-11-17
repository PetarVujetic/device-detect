const express = require('express');
const app = express();
const UAParser = require('ua-parser-js');
var parser = new UAParser();


app.use('/getDevice', (req, res) => {
    var ua = req.headers['user-agent'];     // user-agent header from an HTTP request
    console.log(parser.setUA(ua).getResult());
    res.status(200).json({ msg: parser.setUA(ua).getResult()});
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("Server Listening");
})