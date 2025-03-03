import './AvatarCardItem.css';

interface AvatarCardItemProps {
    label: string,
    value: string
}

export default function AvatarCardItem(itemProps: AvatarCardItemProps) {
    return (
        <div className="avatar-card-item-container">
            <div className="item-left">{itemProps.label}:</div>
            <div className="item-right">{itemProps.value}</div>
        </div>
    );
}
