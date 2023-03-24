import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function NewNoteForm({ addNotes }) {
    const [newNote, setNewNote] = useState({text: ""});
    const navigate = useNavigate();

    function handleSubmit(evt) {
        evt.preventDefault();
        addNotes(newNote);
        setNewNote({text: ""});
        navigate('/');
    }

    function handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='text'
                value={newNote.text}
                onChange={handleChange}
                required 
            />
            <button type="submit">Add Note</button>
        </form>
    )
}