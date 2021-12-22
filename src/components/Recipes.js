import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as recipeService from '../services/recipeService';
import RecipeCard from "./RecipeCard";

export default function Recipes() {
    let [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(recipes => {
                if (recipes) {
                    setRecipes(recipes);
                    console.log(recipes);
                }
            })
            .catch(err => {
                //todo notify
                console.log(err);
            })
    }, []);

    return (
        <div className="events">
            <div className="container">
                <h1 className="wow fadeInLeftBig">All Recipes</h1>
                <div className="event-grids">
                    {recipes.map(x => <RecipeCard key={x._id}>{x}</RecipeCard>)}
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
}