const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {type: String, required: true}, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema);