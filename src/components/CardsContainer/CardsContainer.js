import Card from "../cards/Card";
import "./style.css";


function CardsContainer(){

    return(
        <>
        <div id="CardsContainer">
            <Card nomeAtor="Robert Pattinson - Batman" banner={1}/>
            <Card nomeAtor="Zoe Kravitz - Mulher gato"  banner={2}/>
            <Card nomeAtor="Jeffrey Wright - Gordon"  banner={3}/>
        </div>
        </>
    )

}

export default CardsContainer;