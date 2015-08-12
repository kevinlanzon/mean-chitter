var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  password: String, //hash created from password
  created_at: {type: Date, default: Date.now}
});

//post schema to represent our entries when a user 'Chirps' a message
var postSchema = new mongoose.Schema({
  created_by: { type: Schema.ObjectId, ref: 'User' },
  created_at: {type: Date, default: Date.now},
  text: String
});

//register a User and Post model with mongoose
mongoose.model('User', userSchema);
mongoose.model('Post', postSchema);
