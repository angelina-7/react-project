import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';
import * as recipeService from '../../../services/recipeService';
import * as likeService from '../../../services/likeService';
import * as utils from '../../../utils/utils';

export default function RecipeDetails() {
    let navigate = useNavigate();
    let [recipe, setRecipe] = useState([]);
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
                    setRecipe({ ...recipe });
                }
            })
            .catch(err => {
                addNotification('Something went wrong. Recipe not found');
                navigate('/recipes')
                console.log(err);
            })
    }, [id]);

    const likeButtonClick = () => {
        if (user._id === recipe._ownerId) {
            return;
        }

        if (recipe.likes.includes(user._id)) {
            addNotification('You cannot like again')
            return;
        }

        likeService.like(user._id, id)
            .then((like) => {
                setRecipe(state => ({ ...state, likes: [...state.likes, user._id] }));
                addNotification('Successfuly liked recipe)', types.success);
            });
    };

    useEffect(() => {
        likeService.getRecipeLikes(id)
            .then(likes => {
                if (likes.message) {
                    setRecipe(recipe => ({ ...recipe, likes: [] }));
                } else {
                    likes = likes.map(x => x.userId);
                    console.log(likes);
                    setRecipe(recipe => ({ ...recipe, likes }));

                }
            })
    }, [likeButtonClick]);

    let date = utils.parseDate(recipe._createdOn);

    const onDeleteHandler = (e) => {
        e.preventDefault();

        recipeService.del(id)
            .then(() => {
                navigate('/recipes');
            });

    };



    return (
        <div className="single">
            <div className="container">
                <h1>
                    {recipe.title}
                </h1>
                <div className="single-left">
                    <p>Published on <span>{date}</span></p>
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
                                <Link className="icon-link round like" to="#" onClick={likeButtonClick}></Link><span>Likes {recipe.likes?.length}</span>
                            </div>
                        )}


                    </div>
                    <div>
                        <span>
                            {recipe.description}
                        </span>
                        <br />
                        <h3>Ingredients</h3>
                        <span>
                            {recipe.ingredients}
                        </span>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="tortor">
                    <h3>Instructions</h3>
                    {recipe.instructions}
                </div>
            </div>
        </div>
    );
}