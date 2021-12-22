export default function UserRecipeCard({
imageUrl,
title,
_id
}) {
    return (
        <div className="col-md-4 service-grid">
            <div className="service-grd">
                <img src={imageUrl} alt=" " className="img-responsive" />
                <div className="service-grd-pos">
                    <h4>{title}</h4>
                    <div className="more m2">
                        <a href="single.html" className="hvr-curl-bottom-right">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}