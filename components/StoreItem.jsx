import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';

const StoreItem = ({ item, set_cart, _cart }) => {
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Click!", item.name)
        set_cart([..._cart, {id_item: item.id, qty: 1}])
    }
    return (
        <button>
        <div
            className='border-blue-700 border event_card  w-full relative bg-white  pt-5 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto my-5  rounded-lg px-10 max-w-sm  overflow-hidden '>
            <img className="w-full" src={item.src} alt={`Imagen de ${item.name}`} />
            <h1 className='text-center md:text-lg font-bold'>
                {item.name}
            </h1>
            <p className='mt-2 text-left card_text'>{item.price}</p>
        </div>
        </button>
    )
}

export default StoreItem