const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database/index');
const salt = 10;

app.use(express.static(path.join(__dirname, '../react-client/build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/signup' , (req, res) => { 
    const { username, password } = req.body;
    db.User.find({username: username }, (err, data) => {
        if (err) throw err;
         else {
            bcrypt.hash(password, salt, (err, hash) => { 
                if (err) {
                    throw err;
                } 
                let user = new db.User({
                    username: username,
                    email: email,
                    password: hash
                }); 
                user.save(err, data => {
                    if (err) {
                        throw err;
                    } 
                });
            });
        }
    })
});

app.post('login', (req, res) => {
    const {username, password} = req.body;
    db.User.find({username}, (err, data) => {
        if(err) throw err;
        bcrypt.compare(password, data.password, (found) => {
            if(found){
                console.log('session');
            } else {
                res.sendStatus(400);
            } 
        })
    })
});

// all the http methods, and the handlers in the han =>dler file.
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
