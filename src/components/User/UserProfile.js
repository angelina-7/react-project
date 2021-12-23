import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as recipeService from '../../services/recipeService';
import UserRecipeCard from './UserRecipeCard'

export default function UserProfile() {
    let [recipes, setRecipes] = useState([]);
    const { userId } = useParams();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        if (user._id == userId) {
            recipeService.getMy(userId)
                .then(recipes => {
                    if (recipes.massage) {
                        throw ('Unsucssessful fetch');
                    } else {
                        setRecipes(recipes);
                    }
                })
                .catch(err => {
                    addNotification('Something went wrong. Recipes for this user not found')
                    console.log(err);
                })
        }

    }, [userId]);

    return (
        <>
            <div className="banner1">
                <div className="container"></div>

            </div>
            <div className="services">
                <div className="container">
                    <h1>
                        My Recipes | {user.email}
                    </h1>
                    <div className="service-grids">
                        {recipes
                            ? recipes.map(x => (<UserRecipeCard imageUrl={x.imageUrl} title={x.title} _id={x._id} />))
                            : <div>No recipes to show</div>}
                    </div>
                </div>
            </div>
        </>
    );
}