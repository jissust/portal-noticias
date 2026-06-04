import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";

const news = [
  {
    id: 1,
    src: "/images/hero/hero-1.jpg",
    href: "/noticias/san-lorenzo-gano",
    category: "Liga Profesional",
    title: "San Lorenzo consiguió una victoria clave",
    text: "El conjunto cuervo se impuso en un partido muy disputado.",
    date: "14 de junio de 2026",
  },
  {
    id: 2,
    src: "/images/hero/hero-2.jpg",
    href: "/noticias/mercado-de-pases",
    category: "Mercado de pases",
    title: "Se acerca un nuevo refuerzo",
    text: "La dirigencia avanza para cerrar la incorporación.",
    date: "13 de junio de 2026",
  },
  {
    id: 3,
    src: "/images/hero/hero-3.jpg",
    href: "/noticias/copa-argentina",
    category: "Copa Argentina",
    title: "Confirmada la fecha del próximo encuentro",
    text: "El partido ya tiene estadio y horario definidos.",
    date: "12 de junio de 2026",
  },
];

export default function Home() {
  return (
    <>
      <Hero slides={news} />
      <LatestNews news={news} />
    </>
  
  );
}
