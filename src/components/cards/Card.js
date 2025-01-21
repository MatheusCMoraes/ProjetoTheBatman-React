function Card({nomeAutor, url}){

    return(
        <>
            <div class="card-content">
                <div class="card_banner" style={{backgroundImage: {url}}}>{nomeAutor}</div>
                <div class="card_banner" style={{backgroundImage: {url}}}>{nomeAutor}</div>
                <div class="card_banner" style={{backgroundImage: {url}}}>{nomeAutor}</div>
            </div>
        </>
    )
}

export default Card;