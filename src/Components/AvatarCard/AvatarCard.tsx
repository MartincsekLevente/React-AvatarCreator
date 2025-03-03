import './AvatarCard.css';
import { Gender } from "../../Model/Avatar.ts";
import AvatarCardItem from "./AvatarCardItem/AvatarCardItem.tsx";

interface AvatarCardProps {
    avatarImage: string,
    username: string,
    email: string,
    password: string,
    age: number,
    gender: Gender
}

export default function AvatarCard(avatarCardProps: AvatarCardProps) {
    return (
        <div className="showcase-avatar-card">
            <div className="showcase-avatar-image-container">
                {avatarCardProps.avatarImage ? (
                    <img className="showcase-avatar-image" src={avatarCardProps.avatarImage} alt="Avatar"></img>
                ) : (
                    <img className="showcase-avatar-image" src="src/Public/Assets/Images/default_profile.jpg"
                    alt="Avatar-Default"></img>
                    )}

            </div>
            <AvatarCardItem label={"Username"} value={avatarCardProps.username}></AvatarCardItem>
            <AvatarCardItem label={"Email"} value={avatarCardProps.email}></AvatarCardItem>
            <AvatarCardItem label={"Password"} value={avatarCardProps.password}></AvatarCardItem>
            <AvatarCardItem label={"Age"} value={avatarCardProps.age as String}></AvatarCardItem>
            <AvatarCardItem label={"Gender"} value={avatarCardProps.gender}></AvatarCardItem>
        </div>
    );
}