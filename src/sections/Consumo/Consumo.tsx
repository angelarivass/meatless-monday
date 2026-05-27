import "./Consumo.css"
import vacas from "../../assets/vacas-comiendo.avif"
export default function Consumo() {
    return (
        <div className="grid-consumo">
            <div className="container-consumo">
                <h1 className="title">¿Por qué tanta agua?</h1>
                <p>La carne no solo consume agua cuando el animal bebe. Para producir 1 kg de carne de res se necesita cultivar toneladas de pasto y granos para alimentar al animal durante meses, regar esos cultivos, limpiar los establos y procesar la carne. Todo eso suma. Por eso hablamos de miles de litros: la mayor parte del agua está "escondida" en lo que el animal comió durante toda su vida. A eso se le llama huella hídrica: toda el agua "invisible" detrás de lo que comemos. </p>

            </div>
            <div className="imagen-container">
                <img src={vacas} className="imagen" />
            </div>

        </div>
    );
}