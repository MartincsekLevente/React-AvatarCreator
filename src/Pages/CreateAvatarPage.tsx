import AvatarCardEditor from "../Components/AvatarCardEditor/AvatarCardEditor.tsx";
import './CreateAvatarPage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";

export default function CreateAvatarPage() {

    return (
        <div className={"create-avatar-container"}>
            <Sidebar></Sidebar>
            <div className={"page-overlay"}>
                <AvatarCardEditor></AvatarCardEditor>
            </div>
        </div>
    );
}