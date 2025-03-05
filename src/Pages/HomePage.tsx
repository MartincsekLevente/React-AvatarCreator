import './HomePage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";
import { Navigate } from "react-router-dom";

export default function HomePage() {

    return <Navigate to="/create-avatar" replace/>;
}