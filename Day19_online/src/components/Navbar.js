import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="global-navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTGzafPn4Cz00Y_i1U4mOZH0qj9aaXzeKJw&s" />
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </div>
    );
};

export default Navbar;
