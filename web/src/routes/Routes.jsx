import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cakes from "../pages/Cakes";
import Turtles from "../pages/Turtles";
import Desserts from "../pages/Desserts";
import Fidelity from "../pages/Fidelity";
import AboutUs from "../pages/AboutUs";


export default function AllRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cakes/>}/>
                <Route path="/tortas" element={<Turtles/>}/>
                <Route path="/sobremesas" element={<Desserts/>}/>
                <Route path="/fidelidade" element={<Fidelity/>}/>
                <Route path="/sobre-nos" element={<AboutUs/>}/>
            </Routes>
        
        
        </BrowserRouter>
    );
}