import "./cards.css"

function Cards(prop) {
    return (
        <label className="card-container">
            <input 
                type={prop.type} 
                id={prop.id} 
                checked={prop.checked}
                onChange={prop.onChange}
            />
            <img src={prop.img} alt="" />
            <h3>{prop.titulo}</h3>
            <p>{prop.cost}</p>
            <p>{prop.star}</p>
        </label>
    );
}

export default Cards;
