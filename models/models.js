var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//post schema to represent entries when a user 'Chirps' a message
var postSchema = new mongoose.Schema({
  created_by: String,   //should be changed to ObjectId, ref "User"
  created_at: {type: Date, default: Date.now},
  text: String
});

var userSchema = new mongoose.Schema({
  username: String,
  password: String, //hash created from password
  created_at: {type: Date, default: Date.now}
})

//register a User and Post model with mongoose
mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);
