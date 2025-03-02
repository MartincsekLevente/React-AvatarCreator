import './AvatarCardEditor.css';
import { Button, Input, PasswordInput, SegmentedControl, Slider } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { Validator } from "../../Services/Validator.ts";

export default function AvatarCardEditor() {

    const MIN_AGE = 18;
    const MAX_AGE = 90;

    enum Gender {
        MALE = "Male",
        FEMALE = "Female"
    }

    interface AvatarParams {
        avatarImage: string,
        username: string,
        email: string,
        password: string,
        age: number,
        gender: Gender,
    }

    const [avatarDetails, setAvatarDetails] = useState<AvatarParams>({
        avatarImage: "",
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

    function handleAvatarImageChange(event: ChangeEvent<HTMLInputElement>) {
        console.log(event);
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarDetails((prev) => ({
                    ...prev,
                    avatarImage: e.target?.result as string,
                }))
            }
            reader.readAsDataURL(file);
        }
    }

    function handleCreateAvatarClick() {
        checkValidation();
    }

    function checkValidation() {
        console.log("Image: "+Validator.isValidAvatarImage(avatarDetails.avatarImage));
        console.log("Username: "+Validator.isValidUsername(avatarDetails.username));
        console.log("Email: "+Validator.isValidEmail(avatarDetails.email));
        console.log("Password: "+Validator.isValidPassword(avatarDetails.password));
    }

    return (
        <div className={"avatar-card-editor-container"}>
            <div className={"avatar-card"}>
                <div className={"avatar-image-container"}>
                    <div className={"avatar-image"}
                         onClick={() => document.getElementById("avatar-upload")?.click()}>
                        {avatarDetails.avatarImage ?
                            (
                                <img className="avatar-image-display" src={avatarDetails.avatarImage}
                                     alt="Avatar"></img>
                            ) : (
                                <img className="avatar-image-display" src="src/Public/Assets/Images/default_profile.jpg"
                                     alt="Avatar-Default"></img>
                            )
                        }
                        <input id="avatar-upload" type="file" accept="image/jpeg, image/png"
                               onChange={(event) => handleAvatarImageChange(event)}>
                        </input>
                    </div>
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
                        {label: 'Male', value: Gender.MALE},
                        {label: 'Female', value: Gender.FEMALE},
                    ]}
                    color="blue"
                    size="md"
                    transitionDuration={500}
                    transitionTimingFunction="linear"
                />
            </div>
            <Button onClick={handleCreateAvatarClick}
                    className="create-avatar-button"
                    variant="filled"
                    size="md"
                    radius="md">
                Create Avatar
            </Button>
        </div>
    );
}