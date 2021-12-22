import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import * as recipeService from '../../../services/recipeService';

export default function RecipeDetails() {
    let navigate = useNavigate();
    let [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        recipeService.getOne(id)
            .then(recipe => {
                if (recipe) {
                    setRecipe(recipe);
                }
            })
            .catch(err => {
                //todo notify
                console.log(err);
            })
    }, [id]);

    const onDeleteHandler = (e) => {
        e.preventDefault();

        recipeService.del(id)
            .then(() => {
                navigate('/recipes');
            })
    };


    let date = parseDate(recipe._createdOn);

    return (
        <div class="single">
            <div className="container">
                <h1>
                    {recipe.title}
                </h1>
                <div className="single-left">
                    <p>Published on <span>{ }</span></p>
                    <img src={recipe.imageUrl} alt=" " className="img-responsive" />
                </div>
                <div className="single-right">
                    <h2>{recipe.info}</h2>
                    <div>
                        {user._id && (user._id === recipe._ownerId
                            ? <h4>
                                <Link to={`/recipes/${recipe._id}/edit`} className="label label-info">Edit</Link>
                                <a href="#" className="label label-info" onClick={onDeleteHandler}>Delete</a>
                            </h4>
                            : <div>
                                <Link className="icon-link round like" to="#"></Link><span>Like</span>
                            </div>
                        )}


                    </div>
                    <p>
                        <span>
                            {recipe.description}
                        </span>
                        <br />
                        <h3>Ingredients</h3>
                        <span>
                            {recipe.ingredients}
                        </span>
                    </p>
                </div>
                <div className="clearfix"></div>
                <p className="tortor">
                    <h3>Instructions</h3>
                    {recipe.instructions}
                </p>
            </div>
        </div>
    );
}


const parseDate = (date) => {
    return new Date(date).toString().substring(4, 15);
}