import { Link } from "react-router-dom";

export default function UserRecipeCard({
imageUrl,
title,
_id
}) {
    return (
        <>
        <div className="col-md-4 service-grid">
            <div className="service-grd">
                <img src={imageUrl} alt=" " className="img-responsive" />
                <div className="service-grd-pos">
                    <h4>{title}</h4>
                    <div className="more m2">
                        <Link to={`/recipes/${_id}/details`} className="hvr-curl-bottom-right">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}