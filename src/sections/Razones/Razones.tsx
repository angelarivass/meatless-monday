import Card from "../../components/MediaCard/Card";
import "./Razones.css"

export default function Razones() {
    return(

        <div className="container-razones">
            <div className="container-razones-title">
                <h2 className="title-razones">Más razones para unirte al cambio</h2>
                <p>Meatless Monday no solo ahorra agua, transforma el futuro del planeta.</p>
            </div>

        <div className="razones-grid">
        <Card icon="🫀" title="Salud Cardiovascular" text="Consumir carne roja procesada con frecuencia se asocia con un riesgo hasta 26% mayor de desarrollar enfermedades cardiovasculares."  background="" iconBg="#3b82f6"/>
        <Card icon="🌱" title="Dieta basada en Plantas" text="Las dietas basadas en plantas se asocian con mayor longevidad y menor incidencia de enfermedades." background="" iconBg="#a855f7"/>
        <Card icon="👣" title="Reduce tu huella de carbono" text="La producción de carne genera más emisiones que todo el transporte mundial combinado." background="" iconBg="#ef4444"/>
        <Card icon="🌎" title="Protege el planeta" text="La ganadería usa el 30% de la tierra del planeta y es la principal causa de deforestación." background="" iconBg="#22c55e" />
        
        </div>
        </div>
    )
}