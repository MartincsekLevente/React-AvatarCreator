import './HomePage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";

export default function HomePage() {

    return (
        <div className="home-page-container">
            <Sidebar></Sidebar>
            <div className={"home-page-overlay"}></div>
        </div>

    );
}