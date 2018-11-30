const mongoose = require('mongoose');
mongoose.connect('localhost:27017/qa-engine');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});


let Schema = mongoose.Schema; // Create a mongoose schema 

let User = new Schema({
    username: { type: String },
    password: { type: String,required: true },
    questions:{ type: String},
    answers: { type: String}
})

User = mongoose.model('user', User);

module.exports.User = User;