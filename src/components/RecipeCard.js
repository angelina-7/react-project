export default function RecipeCard({
    imageUrl,
    title,
    _id,
    info,
    description,
    createdOn
}) {
    return (
        <div className="col-md-4 event-grid">
            <p className="dte">{createdOn}</p>
            <img src={imageUrl} alt=" " className="img-responsive" />
            <div className="nobis">
                <Link to="/recipes/{_id}/details">{title}<span>{info}</span></Link>
            </div>
            <p className="quod">{description}</p>
            <div className="more">
                <a href="single.html" className="hvr-curl-bottom-right">Read More</a>
            </div>
        </div>
    );
}