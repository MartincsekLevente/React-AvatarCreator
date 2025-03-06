import './Notification.css';
import { CloseButton } from "@mantine/core";
import { NotificationType } from "../../Model/Notification.ts";

interface NotificationProps {
    messages: string[],
    visible: boolean,
    type: NotificationType,
    onClose: () => void,
}

export default function Notification({messages, visible, type, onClose}: NotificationProps) {
    return visible ? (
        <>
            {visible &&
                <div id="notif-container">
                    <div className={`notif-overlay ${type === NotificationType.SUCCESS ? "success" : "failure"}`}>
                        <div className="notif-message">
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
