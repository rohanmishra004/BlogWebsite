const mongoose = require('mongoose')
const schema = mongoose.Schema;   //this is a constructor method , which defines the schema of the object

const blogSchema = new schema({
    title:{
        type:String,
        required: true
    },
    snippet:{
        type:String,
        required: true
    },
    body:{
        type:String, 
        required: true
    }
}, {timestamps:true});



const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
