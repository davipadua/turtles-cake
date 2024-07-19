import Container from "../components/Container";
import Header from "../components/NavBar";
import Title from "../components/Title";
import FidelityCard from "../components/FidelityCard";
import Footer from "../components/Footer";
import FidelityImg from "../assets/fidelity-img.png";
import { colors } from "@mui/material";
import { Padding } from "@mui/icons-material";




export default function Fidelity(){
    return(
        <>
            <Header/>
            <Container>
                <Title name="Programa de Fidelidade"></Title>
                <FidelityCard img={FidelityImg}/>
            </Container>
            <Footer/>
            


        </>
    )
}