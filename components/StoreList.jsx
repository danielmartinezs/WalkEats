import React from 'react'
import Item from './StoreItem'

const StoreList = ({data, set_cart, _cart}) => {
    return (
        <>
            {data.error ?
                <>
                    <Error
                        msg={data.error}
                    />
                </> :
                <>
                    {data.length <= 0 ?
                        <>
                            <p className=' text-center mt-8 font-bold text-4xl'>Store is unavailable</p>
                        </> :
                        <>
                            <div className='mt-8 w-full grid lg:grid-cols-8  md:grid-cols-4 lg:gap-5 gap-2'>
                                {data.map((item) => (
                                    <div className='col-span-2' key={item.id_item}>
                                        <Item
                                            item={item}
                                            _cart={_cart}
                                            set_cart={set_cart}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </>}
        </>

  );
}

export default StoreList