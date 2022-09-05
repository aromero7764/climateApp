import React, { useEffect, useState } from 'react';
import GeographigPosition from './GeographigPosition';
import '../styles/card.css'
const Card = (props) => {

const [unit, setUnit] = useState(0)
const [mesure, setMesure] = useState("°C")

/* Para pasar un props a un useState */
useEffect(()=> { setUnit(props.temperature)

}, [props.temperature])

/* Para cambiar las unidades de medida */
const mesures = ()=>{
    if(mesure === "°C") {
        setMesure("°F")
        let tempVaule = (props.temperature * 9/5) + (32)
        tempVaule = tempVaule.toFixed(2)
        setUnit(tempVaule)
    } else {
        setUnit(props.temperature)
        setMesure("°C")
    }
} 

document.body.style.backgroundImage = `url('../img/${props.bg}.jpg')`;

    return (
        <div className='main-card'>
            <h1>Wheather App</h1>
            <br />
            <h2>{props.cityName}, {props.countryName}</h2>
            <div className='card-info'>
                <div className='image'>
                    <img className='img-card' src={props.icon} alt="image" />
                </div>
                <div className='card-info_text'>
                    <p className='description'>{props.weaterDescription}</p>
                    <p className='description_item'>Wind speed: <span>{props.winSpeed} m/s</span></p>
                    <p className='description_item'>Cloud: <span>{props.cluds}%</span></p>
                    <p className='description_item'>Pressure: <span>{props.pressure} mb</span> </p>
                </div>
            </div>
            <div className='footer-card'>
            <h3>{unit} {mesure}</h3>
            <button onClick={mesures} >Degrees °C /°F</button>
            </div>
        </div>
    );
};

export default Card;