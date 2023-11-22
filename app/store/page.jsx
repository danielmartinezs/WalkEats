'use client'
import {useState, useEffect, useContext} from 'react'
import Link from "next/link";
import StoreList from '@components/StoreList';
import CartContext  from "@app/context/cartContext";

const page = () => {
    const { cart } = useContext(CartContext);
    const items = cart?.items;
    const [loading, setLoading] = useState(0)
    const [allItems, setAllItems] = useState([]);
    const [allItemsSorted, setAllItemsSorted] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const [_cart, set_cart] = useState([])

    const filterItems = (searchtext) => {
        const regex = new RegExp(searchtext, "i");
        return allItemsSorted.map((store) =>{
            return store.filter(
                (item) =>
                    regex.test(item.name)
            );
        })
    };
    const sortByStore = (data) =>{
        let stores = {}, result = [];
        data.forEach(function (a) {
            if (!(a.store in stores)) {
                stores[a.store] = [];
                result.push(stores[a.store]);
            }
            stores[a.store].push(a);
        });  
        setAllItemsSorted(result)
        setLoading(1)
    }
    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterItems(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };
    const fetchItems = async () => {
        const response = await fetch("/api/items", { method: 'GET' });
        const data = await response.json();
        setAllItems(data);
        sortByStore(data);
        //setLoading(1)
    };

    useEffect(() => {
        fetchItems();
    }, []);
  return (
    <section className='mt-16 mx-auto w-full flex flex-col  items-center'>
        <div className="flex items-center space-x-2 ml-auto">
            <Link
                href="/cart"
                className="px-3 mx-8 py-2 inline-block text-center  text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
                <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
                <span className="hidden lg:inline ml-1">
                Carrito (<b>{items?.length || 0}</b>)
                </span>
            </Link>
        </div>
        {loading===0 ?
        <>
        
        </> : 
        <>
            <form className='relative  w-full flex items-center flex-col justify-center my-8'>
                <input
                    type='text'
                    placeholder='Search by name'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input w-1/2 rounded-full'
                />
            </form>
        </>}
                    {/* Items */}
                    {searchText ? (
                <StoreList
                    data={searchedResults}
                    loading={loading}
                />
            ) : (
                <StoreList 
                    data={allItemsSorted} 
                    loading={loading}
                />
            )}
    </section>
  )
}

export default page