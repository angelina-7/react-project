import { Link } from "react-router-dom";

export default function HomeRecipeCard({
    _id,
    imageUrl,
    title
}) {
    return (
        <li>
            <div className="banner-info1-grid">
                <Link to={`/recipes/${_id}/details`}><img src={imageUrl} alt=" " className="img-responsive" /></Link>
                <h3>{title}</h3>
            </div>
        </li>
    );
}