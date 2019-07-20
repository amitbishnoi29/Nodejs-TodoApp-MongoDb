let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

let Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minlength : 1,
        trim: true
    },
    completed: {
        default : false,
        type : Boolean
    },
    completedAt: {
        type : Number,
        default:null
    }


})

let newTodo = new Todo({
    text : 'Read Books',
    completed:true,
    completedAt: 123
});

newTodo.save().then((e)=>{
    console.log(JSON.stringify(e,undefined,3));
    
},(err)=>{
    console.log(err );
    
})