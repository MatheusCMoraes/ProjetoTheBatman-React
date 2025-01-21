import './style.css'

function Card({nomeAtor, banner}){


    return(
        <>
            <div id="card-content">
                <div className={`card_banner banner${banner}`}>
                    <span>{nomeAtor}</span>
                </div>
            </div>
        </>
    )
}

export default Card;