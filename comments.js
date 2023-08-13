//Create web server
const express = require('express');
const app = express();
const port = 3000;
//Create routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/comments', (req, res) => {
    res.send('This is a comments page');
});
//Start web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
