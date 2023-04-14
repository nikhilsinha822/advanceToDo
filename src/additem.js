import { useState,useEffect } from "react"


const AddItem = ({items, setItems}) => {
    const [item,setItem] = useState("");
    
    const handleSubmit = (e) => {
        const temp = {id: items.length+1, checked: false, item: item};
        const list = [...items, temp];
        setItems(list);     
    }

    useEffect(()=>{
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    },[items])
    
    return <form type="submit" onSubmit={handleSubmit}>
        <input
            autoFocus
            type="text"
            placeholder="enter item"
            onChange={(e) => setItem(e.target.value)}
            value={item}
            required
        />
        <button
            type="submit"
            
        >Add</button>
    </form>
}

export default AddItem