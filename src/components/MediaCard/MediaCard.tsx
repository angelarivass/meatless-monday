import "./MediaCard.css";

type MediaCardProps = {
  title: string;
  text: string;
  background: string;
  border: string;
};

export default function MediaCard({ title, text, background, border }: MediaCardProps) {
  return (
    <div className="media-card" style={{ background, border: `3px solid ${border}` }}>

      <h2>{title}</h2>
      <p>{text}</p>

    </div> 
  );
}