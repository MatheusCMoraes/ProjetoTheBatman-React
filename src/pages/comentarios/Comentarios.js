import "./style.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"

function Comentarios(){

    return(
        <>
            <Header />
            <div id="coment-container">
                <section id="coment-section">
                    <form id="coment-screen">
                        <label for="coment">Faça um comentário:</label>
                        <textarea id="coment" rows="10"  ></textarea>
                        <button type="submit">Comentar</button>
                    </form>
                </section>

                <div id="coment-list">

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Comentarios;