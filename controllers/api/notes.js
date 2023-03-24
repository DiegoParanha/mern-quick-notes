const Note = require('../../models/note.js');


module.exports = {
    create,
    index
};

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const notes = await Note.create(req.body);
        res.json(notes);
    } catch (err) {
        res.status(400).json(err)
    }

}

async function index(req,res) {
    try{
        req.body.user = req.user._id;
        const note = await Note.find({user: req.user._id});
        res.json(note);
    } catch(err) {
        res.status(400).json(err)
    }
}