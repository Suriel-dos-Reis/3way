import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const elementData = data.map((elemento) => {
        return <Card 
                img={elemento.coverImg} 
                rating={elemento.stats.rating} 
                reviewCount={elemento.stats.reviewCount} 
                country={elemento.location} 
                title={elemento.title} 
                price={elemento.price} 
                openSpots={elemento.openSpots} />;
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">{elementData}</section>
        </div>
    );
}
