var mongoose=require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
    username:String,
    password:String,
    age:String,
    sex:String
});

module.exports = mongoose.model('user',userSchema);