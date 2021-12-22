import { useNavigate } from "react-router-dom";

import * as recipeService from '../../../services/recipeService';

export default function CreateRecipe() {
    const navigate = useNavigate();

    const onCreateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let recipeData = Object.fromEntries(formData);

        if (!Object.values(recipeData).some(x => !x)) {
            recipeService.create(recipeData)
                .then((recipe) => {
                    console.log(recipe);
                    navigate('/recipes');
                });
        } else {
            //todo notification
        }

    };

    // title,
    // imageUrl,
    // info,
    // description,
    // ingredients,
    // instructions

    return (
        <div className="contact">
            <div className="container">
                <div className="col-md-8 contact-left" >
                    <h4>Create Recipe</h4>
                    <form onSubmit={onCreateHandler} method="POST">
                        <input type="text" name="title" placeholder="Recipe Name..." />
                        <input type="text" name="imageUrl" placeholder="https://(image link)..." />
                        <input type="text" name="info" placeholder="Potrions, Prep Time..." defaultValue="Potrions: PrepTime:" />
                        <textarea type="text" name="description" placeholder="Intoduce your amazing recipe here..."></textarea>
                        <textarea type="text" name="ingredients" placeholder="Ingredients..."></textarea>
                        <textarea type="text" name="instructions" placeholder="Instructions..."></textarea>

                        <input type="submit" value="Create" />

                    </form>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}