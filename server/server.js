const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database/index');

app.use(express.static(path.join(__dirname, '../react-client/build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// all the http methods, and the handler functions in the handler file.
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../react-client/build/index.html')))
});

const PORT = process.env.PORT || 3000;

if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`The Port : ${PORT}`);
    });
}

module.exports = app;
