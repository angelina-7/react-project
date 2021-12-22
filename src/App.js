import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipesRoot from "./components/Recipes/RecipesRoot";
import Login from "./components/User/Login";
import Register from './components/User/Register';
import Recipes from './components/Recipes/Recipes/Recipes';
import Home from './components/Recipes/Home/Home';
import RecipeDetails from './components/Recipes/Details/RecipeDetails';
import Logout from './components/User/Logout';
import CreateRecipe from './components/Recipes/Create/CreateRecipe';
import UserProfile from './components/User/UserProfile';
import EditRecipe from './components/Recipes/Edit/EditRecipe';

function App() {
    return (
        <AuthProvider>
            <div>
                <Header />

                <main>
                    <Routes>
                        <Route path="/*" element={<RecipesRoot />} />
                        {/* <Route path="/recipes" element={<RecipesRoot />} /> */}

                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/user/:userId" element={<UserProfile />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/recipes/create" element={<CreateRecipe />} />
                        <Route path="/recipes/:id/details" element={<RecipeDetails />} />
                        <Route path="/recipes/:id/like" element={<RecipeDetails />} />

                        <Route path="/recipes/:id/edit" element={<EditRecipe />} />

                    </Routes>
                </main>


                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
