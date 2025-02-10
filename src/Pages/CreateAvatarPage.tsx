import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import AvatarCardEditor from "../Components/AvatarCardEditor/AvatarCardEditor.tsx";
import './CreateAvatarPage.css';

export default function CreateAvatarPage() {
    const navigate = useNavigate();

    return (
        <div className={"create-avatar-page-container"}>
            <Button onClick={() => navigate("/")}
                    className={"back-button"}
                    variant="filled"
                    color="violet"
                    size="md"
                    radius="md">
                Back
            </Button>
            <div className={"avatar-card-editor-overlay"}>
                <AvatarCardEditor></AvatarCardEditor>
            </div>
        </div>
    );
}