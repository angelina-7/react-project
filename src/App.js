import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

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
import GuardedRoute from './components/Common/GuardedRoute';
import ErrorBoundary from './components/Common/ErrorBoundary';
import Notification from './components/Common/Notification';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <NotificationProvider>
                    <div>
                        <Header />
                        <Notification />
                        <main>
                            <Routes>
                                <Route path="/*" element={<RecipesRoot />} />
                                {/* <Route path="/recipes" element={<RecipesRoot />} /> */}

                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />

                                <Route path="/recipes/:id/details" element={<RecipeDetails />} />


                                <Route element={<GuardedRoute />}>
                                    <Route path="/recipes/:id/edit" element={<EditRecipe />} />
                                    <Route path="/user/:userId" element={<UserProfile />} />
                                    <Route path="/logout" element={<Logout />} />

                                    <Route path="/recipes/:id/like" element={<RecipeDetails />} />
                                    <Route path="/recipes/create" element={<CreateRecipe />} />
                                </Route>

                            </Routes>
                        </main>


                        <Footer />
                    </div>
                </NotificationProvider>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
