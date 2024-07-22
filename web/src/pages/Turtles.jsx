import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImgNew from "../assets/logo-img-new.png";
import Footer from "../components/Footer";

import Banoffe from "../assets/Tortas/banoffe.jpg"
import TortaLimao from "../assets/Tortas/torta-de-limao.jpg"
import TortaMaca from "../assets/Tortas/torta-de-maca.png"
import TortaHolandesa from "../assets/Tortas/torta-holandesa.jpg"
import TortaPicapau from "../assets/Tortas/torta-picapau.jpg"



export default function Turtles(){
    return(
        <>
            <NavBar ImgLogo={LogoImgNew} />
            <Container>
                <Title name="Turtles Gourmet"></Title>
                <Card
                    name="Turtle de Limão"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20de%20Limão"
                    price1="R$ 85,00"
                    img={TortaLimao}
                    description1="Massa de bolacha maizena®, recheio cremoso do suco do limão natural."
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle de Maçã"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20de%20Maçã"
                    price1="R$ 45,00"
                    img={TortaMaca}
                    description1="Massa de farinha premium, recheio adocicado de maçã com canela."
                    description2="Ideal para o seu café!"
                />
                <Card
                    name="Turtle Holandesa"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Holandesa"
                    price1="R$ 116,00"
                    img={TortaHolandesa}
                    description1="Massa de bolacha maizena® rodeada de biscoito calipso Nestlé®, recheio cremoso adoçado com um delicioso chocolate branco Melken coberta por uma ganache blend Melken."
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle Escocesa"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Escocesa"
                    price1="R$ 73,00"
                    img={TortaPicapau}
                    description1="Massa de farinha premium com nozes e açúcar mascavo, recheio de caramelo amanteigado com cobertura em chocolate nobre. A famosa torta do Pica-Pau!"
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle Noff"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Noff"
                    price1="R$ 98,00"
                    img={Banoffe}
                    description1="Massa de bolacha maizena® chocolate, recheio feito do doce de leite CooperRita®, banana em rodelas caramelizadas no açúcar e canela e um delicioso e leve chantilly."
                    description2="Rende apx. 16 pedaços."
                />
            </Container>
            <Footer/>
        </>
    )
}