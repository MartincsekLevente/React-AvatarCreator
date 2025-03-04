import './AvatarCard.css';
import { AvatarParams, Gender } from "../../Model/Avatar.ts";
import AvatarCardItem from "./AvatarCardItem/AvatarCardItem.tsx";
import { Button } from "@mantine/core";

interface AvatarCardProps {
    avatarParams: AvatarParams,
    onDelete: (avatarId: string) => void
}

export default function AvatarCard({avatarParams, onDelete}: AvatarCardProps) {
    return (
        <div className="showcase-avatar-card">
            <div className="showcase-avatar-image-container">
                {avatarParams.avatarImage ? (
                    <img className="showcase-avatar-image" src={avatarParams.avatarImage} alt="Avatar"></img>
                ) : (
                    <img className="showcase-avatar-image" src="src/Public/Assets/Images/default_profile.jpg"
                         alt="Avatar-Default"></img>
                )}

            </div>
            <div className="avatar-card-items">
                <AvatarCardItem label={"Username"} value={avatarParams.username}></AvatarCardItem>
                <AvatarCardItem label={"Email"} value={avatarParams.email}></AvatarCardItem>
                <AvatarCardItem label={"Password"} value={avatarParams.password}></AvatarCardItem>
                <AvatarCardItem label={"Age"} value={avatarParams.age as String}></AvatarCardItem>
                <AvatarCardItem label={"Gender"} value={avatarParams.gender}></AvatarCardItem>
            </div>
            <Button
                onClick={() => {
                    onDelete(avatarParams.id)
                }}
                variant="outline"
                color="red">
                Delete Avatar</Button>
        </div>
    );
}