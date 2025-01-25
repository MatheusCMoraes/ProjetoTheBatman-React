import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import './style.css'



function Fotos(){

    const images = require.context('../../Galery', false, /\.(png|jpe?g|svg)$/);

    const gallery = images.keys().map((key, index) => ({
    id: index + 1,
    src: images(key),
    }));

    const remainingImages = gallery.slice(4); // remove as primeiras imagens

    return(
        <>
            <Header />
            
            <div className="gallery-container">
                <div className="gallery">
                    {remainingImages.map((image) => (
                        <img src={image.src} className="gallery-image" />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Fotos;