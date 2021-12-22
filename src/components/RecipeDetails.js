export default function RecipeDetails({
    _id,
    _createdOn,
    title,
    imageUrl,
    info,
    description,
    ingredients,
    instructions
}) {
    return (
        <div class="single">
            <div className="container">
                <h1>
                    {title}
                </h1>
                <div className="single-left">
                    <p>Published on <span>{_createdOn}</span></p>
                    <img src={imageUrl} alt=" " className="img-responsive" />
                </div>
                <div className="single-right">
                    <h2>{info}</h2>
                    <div>
                        <a className="icon-link round like" href="#"></a>
                    </div>
                    <p>
                        <span>
                            {description}
                        </span>
                        <span>
                            {ingredients}
                        </span>
                    </p>
                </div>
                <div className="clearfix"></div>
                <p className="tortor">
                    {instructions}
                </p>
            </div>
        </div>
    );
}