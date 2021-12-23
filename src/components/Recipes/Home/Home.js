import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as recipeService from '../../../services/recipeService';
import HomeRecipeCard from "./HomeRecipeCard";

export default function Home({recipes}) {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner-info">
                        <h1 className="animated fadeInLeftBig" >
                            Cook your best meals!
                            <span>Share with friends and make meals not just delicious but fun.</span>
                        </h1>
                        <div className="banner-info1" >
                            <ul className="banner-info1-list">
                                {recipes?.slice(0,3).map(x => <HomeRecipeCard key={x._id} _id={x._id} imageUrl={x.imageUrl} title={x.title} />)}
                            </ul>

                            <div className="more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                <Link to="/recipes" className="hvr-curl-bottom-right">All Recipes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}