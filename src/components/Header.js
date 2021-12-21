import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">

                        <div className="logo">
                            <Link className="navbar-brand" to="/">Recipes</Link>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                        <nav className="cl-effect-13" id="cl-effect-13">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/recipes">Recipes</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/login">Log In</Link></li>
                                <li><Link to="/register">Register</Link></li>

                                <li><Link to="/recipes">Create Recipe</Link></li>
                                <li><Link to="/user/id">My profile</Link></li>
                                <li><Link to="/logout">Log Out</Link></li>
                            </ul>
                        </nav>

                    </div>
                </nav>
            </div>
        </div>
    );
}