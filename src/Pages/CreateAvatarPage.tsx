import AvatarCardEditor from "../Components/AvatarCardEditor/AvatarCardEditor.tsx";
import './CreateAvatarPage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";
import { NotificationType } from "../Model/Notification.ts";
import Notification from "../Components/Notification/Notification.tsx";
import { useState } from "react";

export default function CreateAvatarPage() {

    const [notifVisible, setNotifVisible] = useState(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([])

    function openNotification(messages: string[]) {
        setErrorMessages(messages)
        setNotifVisible(true);
    }

    return (
        <div className={"create-avatar-container"}>
            <Sidebar></Sidebar>
            <Notification
                messages={errorMessages}
                visible={notifVisible}
                type={NotificationType.FAILURE}
                onClose={() => setNotifVisible(false)}>
            </Notification>
            <div className={"create-avatar-page-overlay"}>
                <AvatarCardEditor
                    onError={(messages: string[]) => openNotification(messages)}>
                </AvatarCardEditor>
            </div>
        </div>
    );
}