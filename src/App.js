//import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
//    let x='lll'
    return (
         <Router>
        <div className = "App" >
        <NavBar />
        <div className="content">
        <Switch>

            <Route exact path = "/">
              <HomePage />
             </Route>

             <Route exact path = "/create">
                <Create/>
             </Route>

             <Route exact path = "/Blogs/:id">
                <BlogDetails/>
             </Route>
             <Route path = "*">
                <NotFound/>
             </Route>
        </Switch>
        </div>
        <Footer />
        </div>
        </Router>
    );
}

export default App;