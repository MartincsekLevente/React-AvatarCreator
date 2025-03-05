import './Notification.css';
import { CloseButton } from "@mantine/core";
import { useEffect } from "react";
import { NotificationType } from "../../Model/Notification.ts";

interface NotificationProps {
    messages: string[],
    visible: boolean,
    type: NotificationType
    onClose: () => void
}

export default function Notification({messages, visible, type, onClose}: NotificationProps) {

    useEffect(() => {
        //TODO
    }, []);

    function setTypeStyling() {

    }

    return visible ? (
        <>
            {visible &&
                <div id="notif-container">
                    <div className="notif-overlay success">
                        <div className="notif-message success">
                            {messages && messages.map((message, index) => {
                                return <div className="notif-message-item" key={index}>
                                    {message}
                                </div>
                            })}
                        </div>
                        <CloseButton
                            className="notif-close-button"
                            onClick={onClose}
                            variant="transparent"
                            size="lg">
                        </CloseButton>
                    </div>
                </div>
            }
        </>
    ) : null;

}
