import "./style.css";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Conteudo from "../../components/conteudo/Conteudo";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

function Home(){

    return(
        <>
        <Header />
        <div id="home_container">
            <Banner />
            <Conteudo />
            <CardsContainer />
        </div>
        <Footer />
        </>
    );
}

export default Home;