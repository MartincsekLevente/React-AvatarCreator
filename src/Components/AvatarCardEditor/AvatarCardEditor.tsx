import './AvatarCardEditor.css';
import { Input, PasswordInput, SegmentedControl, Slider } from "@mantine/core";
import { ChangeEvent, useState } from "react";

export default function AvatarCardEditor() {

    const MIN_AGE = 18;
    const MAX_AGE = 90;

    enum Gender {
        MALE = "Male",
        FEMALE = "Female"
    }

    interface AvatarParams {
        username: string,
        email: string,
        password: string,
        age: number,
        gender: Gender
    }

    const [avatarDetails, setAvatarDetails] = useState<AvatarParams>({
        username: "",
        email: "",
        password: "",
        age: MIN_AGE,
        gender: Gender.MALE,
    });

    function handleUsernameInputChange(event: ChangeEvent<HTMLInputElement>) {
        setAvatarDetails((prev) => ({
            ...prev,
            username: event.target.value,
        }));
    }

    function handleEmailInputChange(event: ChangeEvent<HTMLInputElement>) {
        setAvatarDetails((prev) => ({
            ...prev,
            email: event.target.value,
        }));
    }

    function handlePasswordInputChange(event: ChangeEvent<HTMLInputElement>) {
        setAvatarDetails((prev) => ({
            ...prev,
            password: event.target.value,
        }));
    }

    function handleGenderInputChange(value: string) {
        setAvatarDetails((prev) => ({
            ...prev,
            gender: value as Gender,
        }));
    }

    return (
        <div className={"avatar-card-editor-container"}>
            <div className={"avatar-card"}>
                <div className={"avatar-image-container"}>
                    <div>Image placeholder</div>
                </div>
                <Input
                    onChange={(event) => handleUsernameInputChange(event)}
                    value={avatarDetails.username}
                    placeholder="Username"
                    size="md"
                    variant="default"
                />
                <Input
                    onChange={(event) => handleEmailInputChange(event)}
                    value={avatarDetails.email}
                    placeholder="Email"
                    size="md"
                />
                <PasswordInput
                    onChange={(event) => handlePasswordInputChange(event)}
                    value={avatarDetails.password}
                    placeholder="Password"
                    size="md"
                />
                <div className={"age-slider-container"}>
                    Age: {avatarDetails.age}
                    <Slider
                        onChange={(value) => setAvatarDetails({...avatarDetails, age: value})}
                        value={avatarDetails.age}
                        min={MIN_AGE}
                        max={MAX_AGE}
                    />
                </div>
                <SegmentedControl
                    onChange={(value) => handleGenderInputChange(value)}
                    value={avatarDetails.gender}
                    data={[
                        { label: 'Male', value: Gender.MALE },
                        { label: 'Female', value: Gender.FEMALE },
                    ]}
                    color="blue"
                    size="md"
                    transitionDuration={500}
                    transitionTimingFunction="linear"
                />
            </div>
        </div>
    );
}