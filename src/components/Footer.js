export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-grids">
                        <div className="col-md-3 footer-grid">
                            <h3>About Us</h3>
                            <div className="footer-grd-left">
                                <img src="images/me.jpg" className="img-responsive" alt=" " />
                            </div>
                            <div className="footer-grd-left">
                                <p>
                                    I'm Angelina and I love cooking as much as I love programming!
                                    I've always wanted to have a site where you can find recipes
                                    by the ingredients you have left. So now I can finaly make it a reality!
                                    I'm suer excited, hope you like it and share with your friends.
                                </p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="col-md-3 footer-grid">
                            <h3>Top Recipes</h3>
                            <ul>
                                <li><a href="#">Pasta Bolognese</a></li>
                                <li><a href="#">Italian Saffron Rissoto</a></li>
                                <li><a href="#">Buns</a></li>
                                <li><a href="#">Pizza Alberto</a></li>
                                <li><a href="#">Chicken Alfredo</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-grid" >
                            <h3>Latest Recipes</h3>
                            <ul>
                                <li><a href="#">Eggplant with mozzarella</a></li>
                                
                            </ul>
                        </div>

                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2016 Cooks. All rights reserved | Design by <a href="http://w3layouts.com/"> W3layouts.</a></p>
                </div>
            </div>
        </div>
    );
}