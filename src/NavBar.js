import { Link } from "react-router-dom";

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#e45e5e",
                    borderRadius: "5px",
                    padding: "10px",
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;