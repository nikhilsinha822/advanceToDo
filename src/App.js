import { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import AddItem from "./additem";
import SearchBar from "./searchBar";
import apiRequest from "./apiRequest";

function App() {

  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchitems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        //console.log(listItems);
        setItems(listItems);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
     setTimeout(() => fetchitems(), 1000);
      //fetchitems();
  }, []);

 
  const addItem = async (item) => {
    const myNewItem = { id: items.length + 1, checked: false, item: item };
    const list = [...items, myNewItem];
    setItems(list);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result)
  };

  const handleCheck = async (id) => {
    const listItems = items.map((prop) => prop.id === id ? {...prop, checked: !prop.checked}: {...prop})
    setItems(listItems);
    //localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    const myItem = listItems.filter((item)=> item.id === id)
    const updateOpotions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOpotions)
    if(result) setFetchError(result);

}



  return (
    <>
      <Header title="List Of Items" />

      <SearchBar search={search} setSearch={setSearch} />

      <AddItem items={items} setItems={setItems} addItem={addItem} />

      <main>
        {isLoading && <p>Loading ...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            search={search}
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            setItems={setItems}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
