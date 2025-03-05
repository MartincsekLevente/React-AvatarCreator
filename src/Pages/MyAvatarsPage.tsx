import './MyAvatarsPage.css';
import Sidebar from "../Components/Sidebar/Sidebar.tsx";
import { useEffect, useState } from "react";
import { AvatarParams } from "../Model/Avatar.ts";
import AvatarCard from "../Components/AvatarCard/AvatarCard.tsx";
import Notification from "../Components/Notification/Notification.tsx";
import { NotificationType } from "../Model/Notification.ts";

export default function MyAvatarsPage() {

    const [avatars, setAvatars] = useState<AvatarParams[]>([]);
    const [notifVisible, setNotifVisible] = useState(true);

    useEffect(() => {
        const savedAvatars = JSON.parse(localStorage.getItem("avatars") || "[]");
        setAvatars(savedAvatars);
    }, []);

    function handleDeleteAvatarButtonClick(avatarId: string) {
        const updatedAvatars = avatars.filter((avatar) => avatar.id !== avatarId);
        setAvatars(updatedAvatars);
        localStorage.setItem("avatars", JSON.stringify(updatedAvatars));
    }

    return (
        <div className="my-avatars-container">
            <Sidebar></Sidebar>
            <Notification
                messages={["Avatar successfully created!"]}
                visible={notifVisible}
                type={NotificationType.SUCCESS}
                onClose={() => setNotifVisible(false)}>
            </Notification>
            <div className="my-avatars-page-overlay">
                {avatars && avatars.map((avatar) => {
                    return (
                        <div key={avatar.id}>
                            <AvatarCard
                                avatarParams={avatar}
                                onDelete={(id) => {
                                    handleDeleteAvatarButtonClick(id)
                                }}>
                            </AvatarCard>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}