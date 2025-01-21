import "./style.css"
import video from '../../Galery/Trailer.mp4'

function Conteudo(){

    return(
        <>
            <div className="content">
                <video className="trailer" controls > 
                    <source src={video} type="video/mp4"/>
                    Seu navegador não possui suporte para vídeos
                </video>
                <div id="content-text">
                    <span id="sinopse">Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população. </span>
                    <button>Comprar ingresso</button>
                </div>
            </div>
        </>
    )

}

export default Conteudo;