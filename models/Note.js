const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId, ref:'User'},
    title:{type:String,required:true,unique:true ,min},
    status:{ type:String, default:'a todo to do ' },
    tags: [{ type:String, maxlength:10}],

})
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;


