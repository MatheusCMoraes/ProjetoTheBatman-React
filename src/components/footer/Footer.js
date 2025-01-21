import "./style.css";
import logo from "../../Galery/logo.jpg";

function Footer(){

    return(
        <>
            <div className="footer_container">
                <img id="logo" src={logo}/>

                <span>Todos os direitos reservados ©</span>

                <span>Desenvolvido por Matheus Moraes</span>
            </div>  
        </>
    );
}

export default Footer;