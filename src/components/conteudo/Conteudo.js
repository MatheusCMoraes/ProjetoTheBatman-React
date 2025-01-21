function Conteudo(){

    return(
        <>
            <div className="content">
                <video class="trailer" controls > 
                    <source src="./The Batman - Trailer Principal.mp4" type="video/mp4"/>
                    Seu navegador não possui suporte para vídeos
                </video>
                <span>Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população. </span>
                <button>Comprar ingresso</button>
            </div>
        </>
    )

}

export default Conteudo;