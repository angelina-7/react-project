import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from './components/Register';
import Recipes from './components/Recipes';
import RecipeDetails from './components/RecipeDetails';
import Logout from './components/Logout';
import CreateRecipe from './components/CreateRecipe';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <AuthProvider>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/user/:userId" element={<UserProfile />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/recipes/create" element={<CreateRecipe />} />
                        <Route path="/recipes/:id/details" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/like" element={<RecipeDetails />} />

                        <Route path="/recipes/:id/edit" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/delete" element={<RecipeDetails />} />

                    </Routes>
                </main>


                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
