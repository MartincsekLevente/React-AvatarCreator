import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className={"home-page-container"}>
            <Button onClick={() => navigate("/create-avatar")}
                    className={"navigation-button"}
                    variant="filled"
                    color="violet"
                    size="md"
                    radius="md">
                Create new Avatar
            </Button>
        </div>
    );
}