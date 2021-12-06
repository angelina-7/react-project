export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-grids">
                        <div className="col-md-3 footer-grid wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h3>About Us</h3>
                            <div className="footer-grd-left">
                                <img src="images/6.jpg" className="img-responsive" alt=" " />
                            </div>
                            <div className="footer-grd-left">
                                <p>Lorem ipsum dolor sit amet
                                </p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="col-md-3 footer-grid wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h3>Top Recipes</h3>
                            <ul>
                                <li><a href="#">doloribus asperiores</a></li>
                                <li><a href="#">Itaque earum rerum</a></li>
                                <li><a href="#">deserunt mollitia</a></li>
                                <li><a href="#">facilis est et expedita</a></li>
                                <li><a href="#">occaecati cupiditate</a></li>
                                <li><a href="#">deserunt mollitia laborum</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-grid wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <h3>Latest Recipes</h3>
                            <ul>
                                <li><a href="#">doloribus asperiores</a></li>
                                <li><a href="#">Itaque earum rerum</a></li>
                                <li><a href="#">deserunt mollitia</a></li>
                                <li><a href="#">facilis est et expedita</a></li>
                                <li><a href="#">occaecati cupiditate</a></li>
                                <li><a href="#">deserunt mollitia laborum</a></li>
                            </ul>
                        </div>

                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="container">
                    <p>&copy; 2016 Cooks. All rights reserved | Design by <a href="http://w3layouts.com/"> W3layouts.</a></p>
                </div>
            </div>
        </>
    );
}