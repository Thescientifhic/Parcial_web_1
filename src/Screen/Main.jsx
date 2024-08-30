import Layout from "../Components/Layout/Layout"
import Booking from "../Components/booking/booking";
import { useState } from "react";
import "./main.css"

function Main (){

    const [selectedP, setSelectedP] = useState(null);

    const choose = (selectedItem) => {
        setSelectedP(selectedItem);
    };

    return(
        <>

        <h1>Paquete</h1>
        <div className="main-container">
            
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