const NotFound = () => {
    return ( 
        <div className="NotFound">
     <div className="card error">  <i className="fas fa-frown"></i> <h2>Not Found Page!</h2> <p>The page you want Not Found</p> <button onClick={()=>window.location.href = "/"} >Try Again</button> </div>

        </div>
     );
}
 
export default NotFound;