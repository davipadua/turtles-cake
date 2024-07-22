import Container from "../components/Container";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import FidelityCard from "../components/FidelityCard";
import Footer from "../components/Footer";
import FidelityImg from "../assets/fidelity-img.png";
import LogoImgNew from "../assets/logo-img-new.png";




export default function Fidelity(){
    return(
        <>
            <NavBar ImgLogo={LogoImgNew} />
            <Container>
                <Title name="Programa de Fidelidade"></Title>
                <FidelityCard img={FidelityImg}/>
            </Container>
            <Footer/>
            


        </>
    )
}