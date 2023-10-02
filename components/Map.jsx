import React from 'react'

const Map = () => {
    return (
        <div className='w-full'>
            <iframe
                className='w-full'
                loading="lazy"
                width="450"
                height="500"        
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw4CXDqK9YoYRHaeGQSuBz5U&key=${process.env.GOOGLE_MAPS_API_KEY}&q=Space+Needle,Seattle+WA`}>
            </iframe>
        </div>
    )
}

export default Map