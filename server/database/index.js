const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/qa-engine');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});


let Schema = mongoose.Schema; // Create a mongoose schema 

let Question = new Schema({
    structure:{ type: String},
    answer: { type: String}
})

let User = new Schema({
    username: { type: String },
    password: { type: String,required: true },
    questions:[Question]
})


User = mongoose.model('user', User);

module.exports.User = User;
module.exports.Question = Question;