import "./style.css";
import { Link } from "react-router-dom"
import logo from "../../Galery/logo.jpg";

function Header(){

    return (
        <>
        <div id="header_container">
            <nav>
                <ul>
                    <img id="logo" src={logo}/>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/contato">
                        <li>Contato</li>
                    </Link>
                    <Link to="/fotos">
                        <li>Fotos</li>
                    </Link>
                    <Link to="/comentarios">
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </div>
        </>
    );

}

export default Header;