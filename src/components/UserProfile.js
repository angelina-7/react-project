import UserRecipeCard from './UserRecipeCard'

export default function UserProfile() {
    return (
        <>
            <div className="banner1">
                <div className="container"></div>

            </div>
            <div className="services">
                <div className="container">
                    <h1>
                        Liked Recipes
                    </h1>
                    <div className="service-grids">
                        <UserRecipeCard imageUrl="" title="hi"/>
                    </div>
                </div>
            </div>
        </>
    );
}