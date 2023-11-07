'use client'
import {useState, useEffect} from 'react'
import StoreList from '@components/StoreList';
const page = () => {
    console.log("Store")
    const [allItems, setAllItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const [_cart, set_cart] = useState([])
    const filterItems = (searchtext) => {
        const regex = new RegExp(searchtext, "i");
        return allItems.filter(
            (item) =>
                regex.test(item.name)
        );
    };
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
    };

    useEffect(() => {
        fetchItems();
    }, []);
  return (
    <section className='mt-16 mx-auto w-full flex flex-col justify-center items-center'>
        <form className='relative w-full flex-center'>
            <input
                type='text'
                placeholder='Search by name'
                value={searchText}
                onChange={handleSearchChange}
                required
                className='search_input peer'
            />
        </form>
                    {/* Items */}
                    {searchText ? (
                <StoreList
                    data={searchedResults}
                    set_cart={set_cart}
                    _cart={_cart}
                />
            ) : (
                <StoreList 
                    data={allItems} 
                    set_cart={set_cart}
                    _cart={_cart}
                />
            )}
    </section>
  )
}

export default page