import "./Impact.css"
import Carousel from "../../components/Carousel/Carousel"
import type { CarouselSlide } from "../../components/Carousel/Carousel"
import hamburguesa from "../../assets/hamburguesa.avif"
import bistec from "../../assets/bistec.jpg"
import carneCruda from "../../assets/carneCruda.avif"
import vacaCafe from "../../assets/vaca2.jpg"
import cdmx from "../../assets/cdmx.jpg"

const slides: CarouselSlide[] = [
    {
        image: hamburguesa,
        label: "Una hamburguesa",
        stat: "2,400",
        statUnit: "litros",
        statLabel: "de agua necesaria",
        description: "El agua necesaria para producir una sola hamburguesa de res equivale a lo que una persona bebe en 3 años.",
    },
    {
        image: bistec,
        label: "Un bistec",
        stat: "3,080",
        statUnit: "litros",
        statLabel: "de agua necesaria",
        description: "El agua necesaria para producir un bistec de 200g equivale a todas las duchas que una persona toma en 2 meses.",
    },

    {
        image: carneCruda,
        label: "1 kg de de carne de res",
        stat: "15,415",
        statUnit: "litros",
        statLabel: "de agua necesaria",
        description: "Equivale al agua que una persona bebe en ~21 años (a 2L/día). O a llenar una alberca estándar (25m) más de la mitad.",
    },
    {
        image: vacaCafe,
        label: "Comer carne 4 días a la semana",
        stat: "640,640",
        statUnit: "litros",
        statLabel: "de agua al año",
        description: "Es el equivalente al agua que una persona usa en toda su vida para ducharse, beber y cocinar (estimado ~600,000–700,000 L en 80 años)",
    },
    {
        image: cdmx,
        label: "México consume",
        stat: "2,000,000",
        statUnit: "de toneladas",
        statLabel: "de carne de res al año",
        description: "Eso equivale a 30.8 billones de litros de agua. Suficiente para abastecer a la Ciudad de México por más de 8 años.",
    },
];

export default function Impact() {
    return (
        <div>
            <div className="titles">
                <h1 className="title">El impacto real del consumo de carne</h1>
                <p>Descubre cuánta agua se consume en la producción de carne:</p>
            </div>

            <div className="grid"> 
                <Carousel color = "#e00000" slides={slides} autoPlayInterval={10000} />
            </div>
        </div>
    );
}
