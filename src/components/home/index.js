import { Link } from "react-router-dom";

function Home({ chidren }) {
    return <div className="page">
        <nav className="menu">
            <Link to={'/d-apps'}>D-App</Link>
            <Link to={'/tokens'}>Tokens</Link>
        </nav>
        {chidren}
    </div>
}
export default Home