import Layout from "../Components/Layout/Layout"
import Booking from "../Components/booking/booking";
import { useState } from "react";
import "./screen.css"

function Main (){

    const [selectedP, setSelectedP] = useState(null);

    const choose = (selectedItem) => {
        setSelectedP(selectedItem);
    };

    return(
        <>

        <div>
            <h1>Paquete</h1>

            <Booking 
                titulo={selectedP?.titulo} 
                cost={selectedP?.precio}
            />
            <Booking 
                titulo={selectedP?.nombre} 
                cost={selectedP?.costo}
            />
            
            <Layout onSelection={choose}></Layout>
        </div>
        </>
    )
}

export default Main;