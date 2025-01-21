import "./style.css"

function Conteudo(){

    return(
        <>
            <div className="content">
                <video className="trailer" controls > 
                    <source src="../../Galery/src/The Batman - Trailer Principal.mp4" type="video/mp3"/>
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