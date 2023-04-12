  
import { useState } from 'react';
import Header from './header'
import Footer from './footer'
import Content from './content';
import AddItem from './additem';
import SearchBar from './searchBar';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [search,setSearch] = useState("")
  console.log(items)
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

        <Content
          search={search}
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
        />

        <Footer/>
    </>
  );
}

export default App;
