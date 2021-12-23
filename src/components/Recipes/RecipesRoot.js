import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

import * as recipeService from '../../services/recipeService';

import { useNotificationContext, types } from '../../contexts/NotificationContext';

import Recipes from './Recipes/Recipes';
import Home from './Home/Home';

export default function RecipesRoot() {
    let [recipes, setRecipes] = useState([]);
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        recipeService.getAll()
            .then(recipes => {
                if (recipes.message) {
                    throw ('Unsucssessful fetch');
                }else {
                    setRecipes(recipes);
                }
            })
            .catch(err => {
                addNotification('Something went wrong. Recipes not found')
                console.log(err);
            })
    }, []);

    return (
        <Routes>
           <Route path="/" element={<Home recipes={recipes}/>}/>
           <Route path="/recipes" element={<Recipes recipes={recipes}/>}/>
        </Routes>
    );
}