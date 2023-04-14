  
import { useState,useEffect } from 'react';
import Header from './header'
import Footer from './footer'
import Content from './content';
import AddItem from './additem';
import SearchBar from './searchBar';

function App() {
  //const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [search,setSearch] = useState("")
  const [fetchError, setFetchError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchitems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json()
        console.log(listItems);
        setItems(listItems)
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => fetchitems(), 5000);
    //fetchitems();
  }, [])
  //console.log(items)
  return (
    <>
        <Header title="List Of Items"/>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <AddItem
          items={items}
          setItems={setItems}
        />
        <main>
          {isLoading && <p>Loading ...</p>}
          {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Content
            search={search}
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            setItems={setItems}
          />}
        </main>
        
        <Footer/>
    </>
  );
}

export default App;
