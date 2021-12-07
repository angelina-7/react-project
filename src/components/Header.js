export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="logo">
                            <a className="navbar-brand" href="index.html">Recipes</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                        <nav className="cl-effect-13" id="cl-effect-13">
                            <ul className="nav navbar-nav">
                                <li><a href="/" className="active">Home</a></li>
                                <li><a href="/recipes">Recipes</a></li>
                                <li><a href="/user/id">My profile</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/login">Log In</a></li>
                                <li><a href="/register">Register</a></li>
                                <li><a href="/logout">Log Out</a></li>
                            </ul>
                        </nav>
                        <div className="social-icons">
                            <ul>
                                <li><a className="icon-link round facebook" href="#"></a></li>
                                <li><a className="icon-link round twitter" href="#"></a></li>
                                <li><a className="icon-link round p" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}