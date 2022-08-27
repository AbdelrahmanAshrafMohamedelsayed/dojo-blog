import {  useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('mario');
    const [Ispending, setIspending] = useState(false);
    let history=useHistory();
    let SubmitHandle =(e)=>{
        e.preventDefault();
        let blog={
            title:title,
            body:body,
            author:author,

        }
        setIspending(true);
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog),
            })
            .then(()=>{
                console.log('Blog created');
                setIspending(false);
        // window.location.href="/"; VALID
                history.push('/')
            })
        // console.log(blog)
    }
    return ( 
        <div className="Create-blog">
            <h2>Add new blog</h2>
            <form className="Create-blog-form" onSubmit={SubmitHandle}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => settitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setbody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setauthor(e.target.value)}
                required
                >
                    <option value="mario">mario</option>
                    <option value="ali">ali</option>
                </select>
               {!Ispending&& <button>Add Blog</button>}
               {Ispending&& <button disabled>Adding Blog...</button>}
         
            </form>
        </div>
     );
}
 
export default Create;