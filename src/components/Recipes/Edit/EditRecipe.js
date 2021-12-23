import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import * as recipeService from '../../../services/recipeService';

export default function EditRecipe() {
    let [recipe, setRecipe] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        recipeService.getOne(id)
            .then(recipe => {
                if (recipe.message) {
                    addNotification('Something went wrong. Recipe not found')
                    navigate('/recipes')
                } else {
                    if (recipe._ownerId == user._id) {
                        setRecipe(recipe);
                    } else {
                        addNotification('You\'re not owner of this recipe')
                        navigate('/recipes')
                    }
                    
                }
            })
            .catch(err => {
                addNotification(err)
                console.log(err);
            })
    }, [id]);

    const onEditHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let recipeData = Object.fromEntries(formData);

        if (!Object.values(recipeData).some(x => !x)) {
            recipeService.update(recipeData, id)
                .then((recipe) => {
                    console.log(recipe);
                    navigate('/recipes');
                });
        } else {
            addNotification('All fields must be filled.')
        }

    };

    return (
        <div className="contact">
            <div className="container">
                <div className="col-md-8 contact-left" >
                    <h4>Edit Recipe</h4>
                    <form onSubmit={onEditHandler} method="POST">
                        <input type="text" name="title" placeholder="Recipe Name..." defaultValue={recipe.title}/>
                        <input type="text" name="imageUrl" placeholder="https://(image link)..." defaultValue={recipe.imageUrl}/>
                        <input type="text" name="info" placeholder="Potrions, Prep Time..." defaultValue={recipe.info} />
                        <textarea type="text" name="description" placeholder="Intoduce your amazing recipe here..." defaultValue={recipe.description}></textarea>
                        <textarea type="text" name="ingredients" placeholder="Ingredients..." defaultValue={recipe.ingredients}></textarea>
                        <textarea type="text" name="instructions" placeholder="Instructions..." defaultValue={recipe.instructions}></textarea>

                        <input type="submit" value="Change" />

                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}