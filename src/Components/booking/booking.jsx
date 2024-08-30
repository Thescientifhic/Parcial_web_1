import "./booking.css"

function Booking (prop){
    return(
        <>
        <h3>{prop.titulo}</h3>
        <p>{prop.cost}</p>
        </>
    )
}

export default Booking;