import Cards from "../cards/Cards";
import planDeViajes from "../../data/data";
import { useState } from "react";
import "./layout.css"

function Layout({onSelection}) {
    const [selected, setSelected] = useState(null);

    const change = (event, item) => {
        setSelected(item);
        onSelection(item);  
    };

    return (
        <div className="Layout-container">

            <h1>Alimentación</h1>
            <div className="food-container">
                {planDeViajes.alimentacion.map((item, index) => (
                    <Cards 
                        key={index} 
                        id={index}
                        checked={selected === item}
                        onChange={(event) => change(event, item)}
                        type="radio" 
                        img={item.imagen}
                        titulo={item.titulo} 
                        cost={`$${item.precio}`} 
                        star=""
                    />
                ))}
            </div>

            <h1>Hoteles</h1>
            <div className="hotels-container">
                {planDeViajes.hoteles.map((item, index) => (
                    <Cards 
                        key={index} 
                        id={index}
                        checked={selected === item}
                        onChange={(event) => change(event, item)}
                        type="radio" 
                        img={item.imagen}
                        titulo={item.nombre} 
                        cost={`$${item.costo}`}
                        star={item.estrellas}
                    />
                ))}
            </div>
            
            <h1>Destinos</h1>
            <div className="destinations-container">
                {Object.keys(planDeViajes.destinosdla).map((key, index)=> (
                    <Cards 
                        key={index} 
                        id={index}
                        checked={selected === planDeViajes.destinosdla[key]}
                        onChange={(event) => change(event, planDeViajes.destinosdla[key])}
                        type="radio" 
                        img={planDeViajes.destinosdla[key].imagen}
                        titulo={planDeViajes.destinosdla[key].nombre} 
                        cost={`$${planDeViajes.destinosdla[key].precio}`}
                        star=""
                    />
                ))}
            </div>
        </div>
    );
}

export default Layout;