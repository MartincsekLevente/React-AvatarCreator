import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import CreateAvatarPage from "./Pages/CreateAvatarPage.tsx";
import './global.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create-avatar" element={<CreateAvatarPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
