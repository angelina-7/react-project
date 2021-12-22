export default function RecipeCard({
    _id,
    _createdOn,
    imageUrl,
    title,
    info,
    description,
    
}) {
    return (
        <div className="col-md-4 event-grid">
            <p class="dte">{_createdOn}</p>
            <img src={imageUrl} alt=" " className="img-responsive" />
            <div className="nobis">
                <Link to={`/recipes/{_id}/details`}>{title}<span>{info}</span></Link>
            </div>
            <p className="quod">{description}</p>
            <div className="more">
                <Link to={`/recipes/${_id}/details`} className="hvr-curl-bottom-right">Read More</Link>
            </div>
        </div>
    );
}