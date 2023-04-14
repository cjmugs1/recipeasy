// header component displaying app's name, logo, and navigation links
// navigation links include: home, login, signup, logout, profile, and saved recipes

export const HeaderComponent = () => {
    return (
        <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
            <span role="img" aria-label="recipeasy">🍳</span> Recipeasy
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a data-testid="link" href="/login">
                Login
                </a>
            </li>
            <li className="mx-2">
                <a data-testid="link" href="/signup">
                Signup
                </a>
            </li>
            </ul>
        </nav>
        </header>
    );
};
export default HeaderComponent;