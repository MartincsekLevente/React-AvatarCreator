import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import CreateAvatarPage from "./Pages/CreateAvatarPage.tsx";
import './global.css';
import MyAvatarsPage from "./Pages/MyAvatarsPage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/create-avatar" element={<CreateAvatarPage/>}/>
                <Route path="/my-avatars" element={<MyAvatarsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
