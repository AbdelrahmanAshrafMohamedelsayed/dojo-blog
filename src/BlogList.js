import { Link } from "react-router-dom";

const BlogList = ({blogs,title,all}) => {
   //const blogs = props.blogs;
//    let all =(id,e)=>{
//         // console.log(id);
//     e.target.parentElement.remove();
    
//    }

    return ( 
        <div className="blog-list">
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <div className="blog-list2">
        
        {
            blogs.map(blog => (
             <div className="blog-preview" key={blog.id}>
                <h2 >{blog.title}</h2>
                <p>written by {blog.author}</p>
                <button onClick={()=>all(blog.id)} >delete blog</button>
                <Link to={`/Blogs/${blog.id}`} className="linkk"> Show Details</Link>
             </div>
              
            ))
            }
            </div>

            </div>
     );
}
 
export default BlogList;