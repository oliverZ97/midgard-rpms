var express = require('express');
var app = express();

app.use(express.static('build')); //set directory with static files

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Listening on Port ' + PORT);
})