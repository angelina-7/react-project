import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-info">
                        <h1 className="animated fadeInLeftBig" >
                            Cook your best meals!
                            <span>Share with friends and make meals not just delicious but fun.</span>
                        </h1>
                        <div className="banner-info1" >
                            <ul className="banner-info1-list">
                                <li>
                                    <div className="banner-info1-grid">
                                        <img src="images/2.jpg" alt=" " className="img-responsive" />
                                        <h3>denouncing pleasure</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner-info1-grid">
                                        <img src="images/2.jpg" alt=" " className="img-responsive" />
                                        <h3>denouncing pleasure</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="banner-info1-grid">
                                        <img src="images/2.jpg" alt=" " className="img-responsive" />
                                        <h3>denouncing pleasure</h3>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <Link to="/recipes" className="hvr-curl-bottom-right">All Recipes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}