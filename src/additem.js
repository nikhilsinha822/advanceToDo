import { useState,useEffect } from "react"


const AddItem = ({items, setItems, addItem}) => {
    const [item,setItem] = useState("");
    useEffect(()=>{
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    },[items])
    const handleSubmit = (e) => {
        setItem(e.target.value)
        addItem(item)
    }
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