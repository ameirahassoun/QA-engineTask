const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database/index');
const salt = 10;
const helper = require('./helper')
const bcrypt = require('bcrypt');
const session = require('express-session'); 

app.use(express.static(path.join(__dirname, '../react-client/build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(session({
    secret: 'very very secret', 
    resave: true, 
    saveUninitialized: true
})); 

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
                    password: hash
                }); 
                user.save((err, data) => {
                    if (err) {
                        throw err;
                    } else if (!data) {
                        res.sendStatus(400);
                    } else {
                        helper.createSession(req, res, data.username);
                    }
                });
            });
        }
    })
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    db.User.find({username}, (err, data) => {
        if(err) throw err;
        bcrypt.compare(password, data.password, (found) => {
            if(found){
                helper.createSession(req, res, data[0].username);
            } else {
                res.sendStatus(400);
            } 
        })
    })
});


app.post('/logout', (req, res) => {
    req.session.destroy(function () { 
        res.sendStatus(200);
    });
})

app.post('/question', (req, res) => {
    const { theQuestion } = req.body;
    db.User.update({username: req.session.username},
        {$push: {questions: theQuestion}}, (err, data) => {
        if(err) throw err; 
        res.send(data);
    })
})

app.post('/addAnswer', (req, res) => {
    const { answer, questions_id } = req.body;
    db.User.update({'questions._id': questions_id}, 
    {$set: {'questions.$.answer': answer}}, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})

app.get('/getUserQuestion', (req, res) => {
    console.log('ques')
})

app.get('/allQuestion', (req, res) => {
    db.User.find({} , (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
})


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
