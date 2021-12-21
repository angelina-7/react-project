import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
    return (
        <div>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </main>


            <Footer />
        </div>
    );
}

export default App;
