import { Link } from "react-router-dom";

export default function RecipeCard({
    children
}) {
    let date = parseDate(children._createdOn);

    return (
        <div className="col-md-4 event-grid">
            <p className="dte">{date}</p>
            <img src={children.imageUrl} alt=" " className="img-responsive" />
            <div className="nobis">
                <Link to={`/recipes/${children._id}/details`}>{children.title}<span>{children.info}</span></Link>
            </div>
            <p className="quod">{children.description}</p>
            <div className="more">
                <Link to={`/recipes/${children._id}/details`} className="hvr-curl-bottom-right">Read More</Link>
            </div>
        </div>
    );
}

const parseDate = (date) => {
    return new Date(date).toString().substring(4,15);
}