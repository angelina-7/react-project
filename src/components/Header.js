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
                            <a className="navbar-brand" href="index.html">Cooks</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                        <nav className="cl-effect-13" id="cl-effect-13">
                            <ul className="nav navbar-nav">
                                <li><a href="index.html" className="active">Home</a></li>
                                <li><a href="events.html">News & Events</a></li>
                                <li><a href="short-codes.html">Short Codes</a></li>
                                <li role="presentation" className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Services <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="services.html">Door Delivery</a></li>
                                        <li><a href="services.html">Direct Delivery</a></li>
                                    </ul>
                                </li>
                                <li><a href="mail.html">Mail Us</a></li>
                            </ul>
                        </nav>
                        <div className="social-icons">
                            <ul>
                                <li><a className="icon-link round facebook" href="#"></a></li>
                                <li><a className="icon-link round p" href="#"></a></li>
                                <li><a className="icon-link round twitter" href="#"></a></li>
                                <li><a className="icon-link round dribble" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}