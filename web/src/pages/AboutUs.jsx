import styled from "styled-components";
import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import PComponent from "../components/PComponent"
import LogoImgNew from "../assets/logo-img-new.png";



export default function AboutUs(){
    return(
        <>
            <NavBar ImgLogo={LogoImgNew} />
            <Container>
                <Title name="Bem-vindo(a) à Turtle's Cake!"/>
                <PComponent name="Em nossa Confeitaria Indoor, não fazemos apenas bolos, tortas e doces, mas contamos histórias de amor por meio de cristais de açúcar."/>

                <PComponent name="A ideia de criar docinhos apetitosos, tanto no sabor, quanto no visual, surgia sempre que lugares que visitávamos os apresentavam de uma forma que nem sempre considerávamos ideal. Esse desejo de elevar a experiência dos doces a um novo patamar foi o que motivou a fundação da Turtle's Cake."/>

                <PComponent name="Aqui, cada docinho é feito com muito carinho e amor, sempre com um toque autêntico que reflete nossa dedicação em agradar vocês, nossos clientes, da maneira como gostaríamos de ser agradados."/>

                <PComponent name="Explore nosso menu e descubra uma explosão de sabores e beleza em cada criação. Para nós, não basta apenas criarmos doces bonitos, mas também deliciosos, porque acreditamos que a verdadeira satisfação vem de uma combinação perfeita de estética e paladar."/>

                <PComponent name="Agradecemos por nos visitar e esperamos que cada mordida em nossos docinhos transmita não apenas o sabor, mas também a história e o carinho que colocamos em cada detalhe."/>

                <PComponent name="🐢🐶"/>

            </Container>
            <Footer/>
            


        </>
    )
}