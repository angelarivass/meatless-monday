import "./Ahorro.css"
import Carousel from "../../components/Carousel/Carousel"
import type { CarouselSlide } from "../../components/Carousel/Carousel"
import MediaCard from "../../components/MediaCard/MediaCard";
import agua from "../../assets/agua.jpg"

const slides: CarouselSlide[]=[
    {
        image: agua,
        label: "1 lunes sin carne",
        stat: "2,500",
        statUnit: "litros",
        statLabel: "de agua ahorrados",
        description: "Equivalente a: 16 duchas completas",
    },
    {
        image: agua,
        label: "1 mes de lunes sin carne",
        stat: "10,000",
        statUnit: "litros",
        statLabel: "de agua ahorrados",
        description: "Equivalente a: el agua que una persona bebe en casi 14 años",
    },
    {
        image: agua,
        label: "1 año de lunes sin carne",
        stat: "160,000",
        statUnit: "litros",
        statLabel: "de agua ahorrados",
        description: "Equivalente a: llenar 5 albercas domésticas.",
    },
    {
        image: agua,
        label: "Si 50 alumnos participan",
        stat: "8,000,000",
        statUnit: "litros",
        statLabel: "de agua ahorrados",
        description: "Equivalente a: llenar 3 albercas olímpicas.",
    }




];
    



export default function Ahorro() {
    return(
 
    <div className="container">

        <div className="titles">
            <h1 className="title">¿Cuánta Agua Puedes Ahorrar?</h1>
            <p>Descubre el impacto positivo que puedes generar:</p>
        </div>
        <div className="grid">
            <Carousel slides={slides} color="#1d4ed8" autoPlayInterval={10000} />
        </div>

        <div className=".infoBox-ahorro">
            <MediaCard title="Imagina el impacto de todos los estudiantes" text="Si participamos en Meatless Monday, podríamos ahorrar millones de litros de agua al año. ¡Tu decisión individual crea un cambio colectivo enorme!" background="white" border="green"/>
        </div>
    </div>
    );

}