const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+ '/dist/jtmdtest'));


app.get('/*', function(req,res){
    console.log(req);
    res.sendFile(path.join(__dirname+'/dist/jtmdtest/index.html'));
});


app.listen(process.env.PORT || 8080);