import Container from "../components/Container";
import Title from "../components/Title";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LogoImgNew from "../assets/logo-img-new.png";

import BoloCenoura from "../assets/Bolos/Bolo-de-cenoura.jpg"
import BoloLaranja from "../assets/Bolos/bolo-de-laranja.jpg"
import BoloMaca from "../assets/Bolos/Bolo-de-maca.jpg"



export default function Cakes(){
    return(
        <>
            <NavBar ImgLogo={LogoImgNew} />
            <Container>
                <Title name="Cakes Gourmet"></Title>
                <Card
                    name="Cake de Maçã"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Maçã"
                    price1="R$ 40,00"
                    img={BoloMaca}
                    description1="Massa de farinha premium com açúcar mascavo e canela, suco e fatias da maçã natural."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Laranja"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Laranja"
                    price1="R$ 40,00"
                    img={BoloLaranja}
                    description1="Massa de farinha premium com o suco da laranja natural e cobertura de laranja."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
                <Card
                    name="Cake de Cenoura"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Cake%20de%20Cenoura"
                    price1="R$ 45,00"
                    img={BoloCenoura}
                    description1="Massa de farinha premium com a cenoura natural e cobertura de chocolate com granulado gourmet."
                    description2="Perfeito para acompanhar uma xícara de café!"
                />
            </Container>
            <Footer/>
        </>
    )
}
