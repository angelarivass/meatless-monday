import "./Card.css"

type CardProps = {
    icon: string;
    title: string;
    text: string;
    background: string;
    iconBg: string;
}

export default function Card({ icon, title, text, background, iconBg }: CardProps) {
    return (
        <div className="card-component" style={{ background }}>
            <div className="card-icon" style={{ backgroundColor: iconBg }}>
                <span>{icon}</span>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>

        </div>
    );

}