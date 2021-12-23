import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as recipeService from '../../../services/recipeService';
import RecipeCard from "./RecipeCard";

export default function Recipes({ recipes }) {
    return (
        <div className="events">
            <div className="container">
                <h1 className="wow fadeInLeftBig">All Recipes</h1>
                <div className="event-grids">
                    {recipes
                        ? recipes.map(x => <RecipeCard key={x._id}>{x}</RecipeCard>)
                        : <div>No recipes to show</div>}
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
}