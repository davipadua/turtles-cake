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

const BanoffeList = [
    {
        "src": Banoffe,
        "alt": "Banoffe",
    }
]

const TortaLimaoList = [
    {
        "src": TortaLimao,
        "alt": "Torta de Limão",
    }
]

const TortaMacaList = [
    {
        "src": TortaMaca,
        "alt": "Torta de Maçã",
    }
]

const TortaHolandesaList = [
    {
        "src": TortaHolandesa,
        "alt": "Torta Holandesa",
    }
]

const TortaPicapauList = [
    {
        "src": TortaPicapau,
        "alt": "Torta Escocesa",
    }
]



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
                    description1="Massa de bolacha maizena, recheio cremoso do suco do limão natural e um irresistível merengue maçaricado."
                    imgList={TortaLimaoList}
                />
                <Card
                    name="Turtle de Maçã"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20de%20Maçã"
                    price1="R$ 45,00"
                    description1="Massa de farinha premium, recheio adocicado de maçã com canela."
                    description2="Ideal para o seu café!"
                    imgList={TortaMacaList}
                />
                <Card
                    name="Turtle Holandesa"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Holandesa"
                    price1="R$ 116,00"
                    description1="Massa de bolacha maizena rodeada de biscoito calipso, recheio cremoso com chocolate branco coberta por uma ganache blend."
                    imgList={TortaHolandesaList}
                />
                <Card
                    name="Turtle Escocesa"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Escocesa"
                    price1="R$ 90,00"
                    description1="Massa de farinha premium com nozes e açúcar mascavo, recheio de caramelo amanteigado com cobertura em chocolate nobre. "
                    description2="A famosa torta do Pica-Pau!"
                    imgList={TortaPicapauList}
                />
                <Card
                    name="Turtle Noff"
                    link="https://wa.me/5535991945050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Turtle%20Noff"
                    price1="R$ 98,00"
                    description1="Massa de bolacha maizena® chocolate, recheio feito do doce de leite CooperRita®, banana em rodelas caramelizadas no açúcar e canela e um delicioso e leve chantilly."
                    imgList={BanoffeList}
                />
            </Container>
            <Footer/>
        </>
    )
}