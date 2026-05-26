import "./Header.css";

export default function Header() {
  return (
    <div className="hero">


      <div className="logoContainer">
        <span className="icon"></span>
        <h1>Meatless Monday</h1>
      </div>

      <p className="subtitle">
        Un pequeño cambio con un gran impacto: juntos podemos conservar miles de litros de agua y reducir emisiones de gases de efecto invernadero.
      </p>

      <div className="infoBox">
        <p>
            ¿Sabías que la producción de carne consume más agua que cualquier otro alimento y genera más emisiones que todo el transporte mundial?
            Descubre cómo un lunes sin carne puede hacer la diferencia.
        </p>
      </div>


      

    </div>
  );
}

