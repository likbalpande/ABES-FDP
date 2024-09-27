import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            {/* <a href="/">Home</a> */}
            {/* <a href="/search">Search</a> */}
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    );
};

export default Navbar;
