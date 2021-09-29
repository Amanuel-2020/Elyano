const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    image: {
        public_id: {
             type: String,
             required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    link: {
        type: String,
        required: true
    },
    CreatedAt : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Blog', BlogSchema)