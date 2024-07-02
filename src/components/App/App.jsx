import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage"
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import Navigation from "../Navigation/Navigation";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {

    return (
        <div>          
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path ="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
        
    ) 
}
