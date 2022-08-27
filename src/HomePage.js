// import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const HomePage = () => {
  const {Data:blogs,Ispending,IsError}=useFetch(' http://localhost:8000/blogs');
  const history = useHistory();
    // const [blogs, setblogs] = useState(null);
    // const [nm, setnm] = useState("ali");
    // let filteredBlogs=blogs.filter(blog=>blog.author==="mario");
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
      const refreshPage = ()=>{
        window.location.reload();
     }
    return ( 
        <div className="home">
          {IsError&&  <div className="card error">  <i className="fas fa-frown"></i> <h2>error!</h2> <p>{IsError}</p> <button onClick={refreshPage} >Try Again</button> </div> }
          {Ispending&&  <div className="center">
        <div className="ring"></div>
        <div className="loading">LOADING...</div>
    </div>}
    {blogs&& <BlogList blogs={blogs} title="all blogs" all={all} />}
     {/* <BlogList blogs={filteredBlogs} title="mario blogs" all={all} /> */}
     {/* <button onClick={()=>{setnm("aaa")}}>gg</button>
     <p>{nm}</p> */}
      </div>
     );
}
 
export default HomePage;