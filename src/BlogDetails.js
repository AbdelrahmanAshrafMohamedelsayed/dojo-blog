import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { useHistory } from "react-router-dom";
const BlogDetails = () => {
    let {id}= useParams();
    const refreshPage = ()=>{
        window.location.reload();
     }
    // console.log(useParams())
    const history = useHistory();
    const { Data:blogs, Ispending, IsError }=useFetch(' http://localhost:8000/blogs/'+id);
    console.log(blogs);
//  let x=blogs.filter((blog)=>blogs.id===id)
    // console.log(x)
    let all=(id)=>{
        //  const newBlogs = blogs.filter(blog => blog.id !== id);
          // const newblogs= blogs.filter(blog=> blog.id!==id);
          // setblogs(newblogs);
          fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE'
          })
          .then(()=>{
            history.push('/');
        window.location.reload();

          });
      }
    return ( 
        <div className="BlogDetails">
            {IsError&&  <div className="card error">  <i className="fas fa-frown"></i> <h2>error!</h2> <p>{IsError}</p> <button onClick={refreshPage} >Try Again</button> </div> }
          {Ispending&&  <div className="center">
        <div className="ring"></div>
        <div className="loading">LOADING...</div>
    </div>}
    {blogs &&(
        <article>
            <h2>{blogs.title}</h2>
            <p>wrriten by {blogs.author}</p>
            <div>{blogs.body}</div>
            <button onClick={()=>all(id)}>delete blog</button>
        </article>
    )}
        </div>
     );
}
 
export default BlogDetails;