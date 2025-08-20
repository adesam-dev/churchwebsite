import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Grace Church</div>
            <div className="navbar-Links">
                <Link to="/">Home</Link>       
                <Link to="/about">About</Link>
                <Link to="/events">Events</Link>
                <Link to="/sermons">Sermon</Link>
                <Link to="/contact">Contacts</Link>
                <Link to="/give">Give</Link>
                <Link to="/media">Media</Link>
            </div>
        </nav>
    );
}