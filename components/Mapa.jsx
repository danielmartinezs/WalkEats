import React from 'react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

function Mapa() {
    const center = { lat: 25.662797, lng: -100.419847}
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    })
  return (
    <div>
        {isLoaded ? 
        <div>
            {console.log(process.env.GOOGLE_MAPS_API_KEY)}
            <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{width: '100%', height: '100%'}}/>
        </div>
        :
        <div>
            Cargando mapa
        </div>}
    </div>
  )
}

export default Mapa