import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title , body , author};
        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/Json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>Add New Movie Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Movie Name:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Synopsis</label>
                <textarea
                  required
                  value = {body}
                  onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Director's Name:</label>
                <input
                    type="text"
                    required
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Movie...</button>}
            </form>
        </div>
    );
}

export default Create;