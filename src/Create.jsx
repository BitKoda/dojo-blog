import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Big-Z');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="body">Article</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label htmlFor="author">Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Big-Z">Big-Z</option>
                    <option value="Carboni">Carboni</option>
                    <option value="Chopper">Chopper</option>
                    <option value="Deno">Deno</option>
                    <option value="Jamo">Jamo</option>
                </select>
                { !isLoading && <button>Create Blog</button> }
                { isLoading && <button disabled>Creating...</button> }
            </form>
        </div>
     );
}
 
export default Create;