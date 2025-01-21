import "./style.css";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

function Home(){

    return(
        <>
        <div id="home_container">
            <Header />
            <Banner />
            <CardsContainer />
            <Footer />
        </div>
        </>
    );
}

export default Home;