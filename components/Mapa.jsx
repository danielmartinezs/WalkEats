import { useEffect, useRef, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'

function Mapa() {
    const [map, setMap] = useState(/**@type google.maps.Map */(null));
    const [directionsResponse, setDirectionsResponse] = useState();
    const [distance, setDistance] = useState();
    const [duration, setDuration] = useState();
    const locations ={
        
    }
    const locHortonsCcu = { lat: 25.660343, lng: -100.420232 }
    const locHortonsEstoa = { lat: 25.66414, lng: -100.42156 }
    const locDavilas = { lat: 25.6602, lng: -100.42029 }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    useEffect(() => {
        calculateRoute()
    }, [])

    function directionsServices() {
        return new google.maps.DirectionsService();
    }

    const calculateRoute = async () => {
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: locHortonsEstoa,
            destination: locDavilas,
            travelMode: google.maps.TravelMode.WALKING
        })
        console.log(results)
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    /*
    IF 1 STORE Y ES DAVILAS = DAVILAS
    IF 1 STORE Y ES TIM HORTONS = ESTOA
    IF 2 STORES = CCU
    */

    return (
        <div>
            {isLoaded ?
                <div className='flex flex-col justify-center items-center'>
                    <span className='bg-gradient-to-r from-orange-700 via-primary-green to-emerald-300 bg-clip-text text-lg text-transparent'>
                        Tu pedido se encuentra a {distance} y tardará {duration} en completar el recorrido
                    </span>
                    <GoogleMap
                        center={locDavilas}
                        zoom={18}
                        mapContainerStyle={{ width: '100%', height: '550px' }}
                        options={{
                            streetViewControl: false,
                            mapTypeControl: false
                        }}>
                        <MarkerF position={locDavilas} />
                        {directionsResponse &&
                            <DirectionsRenderer directions={directionsResponse} />
                        }
                    </GoogleMap>
                </div>
                :
                <div>
                    Cargando mapa
                </div>}
        </div>
    )
}

export default Mapa