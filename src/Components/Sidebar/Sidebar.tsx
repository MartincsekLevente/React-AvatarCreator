import './Sidebar.css';
import { Button } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();
    const activePage = useLocation();

    return (
        <div className="sidebar-container">
            <Button onClick={() => navigate("/")}
                    className={`navigation-button ${activePage.pathname === "/" ? "active" : ""}`}
                    variant="subtle"
                    size="md"
                    radius="md">
                Home
            </Button>
            <Button onClick={() => navigate("/create-avatar")}
                    className={`navigation-button ${activePage.pathname === "/create-avatar" ? "active" : ""}`}
                    variant="subtle"
                    size="md"
                    radius="md">
                Create new Avatar
            </Button>
            <Button onClick={() => navigate("/my-avatars")}
                    className={`navigation-button ${activePage.pathname === "/my-avatars" ? "active" : ""}`}
                    variant="subtle"
                    size="md"
                    radius="md">
                My Avatars
            </Button>

        </div>
    );
}