import Container from "../components/Container";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImgNew from "../assets/logo-img-new.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import Avela from "../assets/Docinhos/avela.jpg"
import BrigadeiroLeiteGranule from "../assets/Docinhos/brigadeiro-ao-leite-granule.jpg"
import BrigadeiroLeiteTradicional from "../assets/Docinhos/brigadeiro-ao-leite-tradicional.jpg"
import BrigadeiroBrancoGranule from "../assets/Docinhos/brigadeiro-branco-granule.jpg"
import BrigadeiroBrancoTradicional from "../assets/Docinhos/brigadeiro-branco-tradicional.jpg"
import Casadinho from "../assets/Docinhos/casadinho.jpg"
import Churros from "../assets/Docinhos/churros.jpg"
import Confete from "../assets/Docinhos/confete.jpg"
import DoisAmores from "../assets/Docinhos/dois-amores.jpg"
import Morango from "../assets/Docinhos/morango.jpg"
import Ninho from "../assets/Docinhos/ninho.jpg"
import NinhoNutella from "../assets/Docinhos/ninho-e-nutella.jpg"
import Pacoca from "../assets/Docinhos/pacoca.jpg"
import Prestigio from "../assets/Docinhos/prestigio.jpg"



export default function Sweets(){
    return(
        <>
            <NavBar ImgLogo={LogoImgNew} />
            <Container>
                <Title name="Docinhos Gourmet"></Title>
                <Card
                    name="Brigadeiro de Chocolate ao Leite"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Chocolate%20ao%20Leite"
                    price1="R$ 160,00 - Tradicional"
                    price2="R$ 200,00 - Granulé"
                    price3="R$ 200,00 - Confete"
                    img={BrigadeiroLeiteTradicional}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e chocolate em pó 50% cacau."
                />
                <Card
                    name="Brigadeiro de Chocolate Branco"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Chocolate%20Branco"
                    price1="R$ 160,00 - Tradicional"
                    price2="R$ 220,00 - Granulé"
                    img={BrigadeiroBrancoTradicional}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e chocolate branco nobre."
                />
                <Card
                    name="Brigadeiro Casadinho"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Casadinho"
                    price1="R$ 160,00 - Tradicional"
                    img={Casadinho}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate em pó 50% cacau e chocolate branco nobre."
                />
                <Card
                    name="Brigadeiro Prestígio"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Prestígio"
                    price1="R$ 180,00 - Tradicional"
                    img={Prestigio}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, leite de coco e coco ralado."
                />
                <Card
                    name="Brigadeiro de Morango"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Morango"
                    price1="R$ 160,00 - Tradicional"
                    img={Morango}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate branco nobre e suco sabor morango."
                />
                <Card
                    name="Brigadeiro Dois Amores"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Dois%20Amores"
                    price1="R$ 160,00 - Tradicional"
                    img={DoisAmores}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate branco nobre e suco de morango."
                />
                <Card
                    name="Brigadeiro de Paçoca"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Paçoca"
                    price1="R$ 180,00 - Tradicional"
                    img={Pacoca}
                    description1="Feito com Leite Moça Nestlé®, creme de leite e paçoca."
                />
                <Card
                    name="Brigadeiro de Ninho"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Ninho"
                    price1="R$ 180,00 - Tradicional"
                    price2="R$ 200,00 - Com Creme de Avelã"
                    img={Ninho}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, Leite Ninho® e Nutella®."
                />
                <Card
                    name="Brigadeiro de Churros"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20de%20Churros"
                    price1="R$ 180,00 - Tradicional"
                    img={Churros}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, canela e doce de leite."
                />
                <Card
                    name="Brigadeiro Ferrero"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Brigadeiro%20Ferrero"
                    price1="R$ 220,00 - Tradicional"
                    img={Avela}
                    description1="Feito com Leite Moça Nestlé®, creme de leite, chocolate 50% cacau, avelã, Nutella® e amendoin triturado."
                />
            </Container>
            <Footer/>
        </>
    )
}