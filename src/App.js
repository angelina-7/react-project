import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>

            <div className="footer-bottom wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div className="container">
                    <p>&copy; 2016 Cooks. All rights reserved | Design by <a href="http://w3layouts.com/"> W3layouts.</a></p>
                </div>
            </div>
        </div>
    );
}

export default App;
