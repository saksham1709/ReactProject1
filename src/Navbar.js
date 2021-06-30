import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Movie Blogger</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
                {/* <LINK style = { {
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius:"6px"
                } } to="https://www.google.com/" >New Blog</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;