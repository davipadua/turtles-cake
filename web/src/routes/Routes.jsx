import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cakes from "../pages/Cakes";


export default function AllRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cakes/>}/>
            </Routes>
        
        
        </BrowserRouter>
    );
}