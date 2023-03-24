export default function NoteCard({note, date}) {
    return (
        <div>
            <p>{note}</p>
            <p>{new Date(date).toLocaleString()}</p>
        </div>
    );
};