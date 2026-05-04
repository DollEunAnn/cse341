// express web server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Eunice!');
})

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server listening at port ' + (process.env.port || port));