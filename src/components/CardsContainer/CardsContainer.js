import Card from "../cards/Card";
import "./style.css";


function CardsContainer(){

    const url1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o8Fmeok_fmGAXei0tgpK3zf699h7_toffA9Uzfsg8dvZOu0v5Kvq_WIDrpayq1Ltsc0&usqp=CAU';
    const url2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygBurgyjDCVg5jKlT-5arSn7pncHCJpnZDQ&usqp=CAU';
    const url3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlcpKJhVGEc6ZLS_OR8IIwajhJFTiP0etnQ&usqp=CAU';

    return(
        <>
        <div id="CardsContainer">
            <Card nome="Robert Pattinson - Batman" url={url1}/>
            <Card nome="Zoe Kravitz - Mulher gato" url={url2}/>
            <Card nome="Jeffrey Wright - Gordon" url={url3}/>
        </div>
        </>
    )

}

export default CardsContainer;