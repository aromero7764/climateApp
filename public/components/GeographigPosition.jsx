import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'

const GeographigPosition = () => {

    const [climateData, setClimateData] = useState({})

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(position => {
            const {latitude, longitude} = position.coords
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=78564142424e35da28daf36572a0ba3c&units=metric`)
                        .then((res)=> setClimateData(res.data))
                    })

    }, [])

    console.log(climateData)

    return (
        <div>
            <Card 
                cityName={climateData?.name}
                countryName={climateData.sys?.country}
                winSpeed={climateData.wind?.speed}
                cluds={climateData.clouds?.all}
                pressure={climateData.main?.pressure}
                temperature={climateData.main?.temp}
                weaterDescription={climateData.weather?.[0].description} 
                icon={`http://openweathermap.org/img/wn/${climateData.weather?.[0].icon}@2x.png`} 
                bg={climateData.weather?.[0].icon}
            />
            
        </div>
            
    );
}
export default GeographigPosition