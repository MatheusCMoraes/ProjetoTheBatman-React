import './style.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import FormContato from '../../components/formContato/FormContato';

function Contato(){

    return(
        <>
            <Header />
            <FormContato />
            <Footer />
        </>
    );
}

export default Contato;