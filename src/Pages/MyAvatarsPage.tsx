import './MyAvatarsPage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";

export default function MyAvatarsPage() {

    return (
        <div className="my-avatars-container">
            <Sidebar></Sidebar>
            <div className={"page-overlay"}></div>
        </div>
    );
}