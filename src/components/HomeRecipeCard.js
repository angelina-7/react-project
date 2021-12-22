export default function HomeRecipeCard({
    imageUrl,
    title,
    description
}) {
    return (
        <li>
            <div className="banner-info1-grid">
                <img src={imageUrl} alt=" " className="img-responsive" />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
}