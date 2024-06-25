import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";
import LogoImg from "../assets/logo-img.png";
import Footer from "../components/Footer";



export default function Turtles(){
    return(
        <>
            <Header/>
            <Container>
                <Title name="Turtles Gourmet"></Title>
                <Card
                    name="Turtle de Limão"
                    link="#"
                    price="R$ 85,00"
                    img={LogoImg}
                    description1="Massa de bolacha maizena®, recheio cremoso do suco do limão natural."
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle de Maçã"
                    link="#"
                    price="R$ 45,00"
                    img={LogoImg}
                    description1="Massa de farinha premium, recheio adocicado de maçã com canela."
                    description2="Ideal para o seu café!"
                />
                <Card
                    name="Turtle Holandesa"
                    link="#"
                    price="R$ 116,00"
                    img={LogoImg}
                    description1="Massa de bolacha maizena® rodeada de biscoito calipso Nestlé®, recheio cremoso adoçado com um delicioso chocolate branco Melken coberta por uma ganache blend Melken."
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle Escocesa"
                    link="#"
                    price="R$ 73,00"
                    img={LogoImg}
                    description1="Massa de farinha premium com nozes e açúcar mascavo, recheio de caramelo amanteigado com cobertura em chocolate nobre. A famosa torta do Pica-Pau!"
                    description2="Rende apx. 16 pedaços."
                />
                <Card
                    name="Turtle Noff"
                    link="#"
                    price="R$ 98,00"
                    img={LogoImg}
                    description1="Massa de bolacha maizena® chocolate, recheio feito do doce de leite CooperRita®, banana em rodelas caramelizadas no açúcar e canela e um delicioso e leve chantilly."
                    description2="Rende apx. 16 pedaços."
                />
            </Container>
            <Footer/>
        </>
    )
}