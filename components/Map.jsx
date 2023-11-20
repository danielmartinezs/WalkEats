import React from 'react'

const Map = () => {
    return (
        <div className='w-full'>
            <iframe
                className='w-full'
                loading="lazy"
                width="500"
                height="500"        
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw4CXDqK9YoYRHaeGQSuBz5U&key=AIzaSyDbY20tuOJ2KCqdmgoGUYuZUBbqVSZe4Ss&q=Space+Needle,Seattle+WA`}>
            </iframe>
        </div>
    )
}

export default Map