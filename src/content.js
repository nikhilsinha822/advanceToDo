import { FaBeer } from 'react-icons/fa';

const Content = ({items, setItems}) => {
    
    const handleClick = (id) => {
        const listItems = items.map((prop) => prop.id === id ? {...prop, checked: !prop.checked}: {...prop})
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
        const listItems = items.filter((prop) => id !== prop.id)
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    return <>
    <ul>
        {
            
            items.length !== 0 ?
            items.map((prop) =>
            <li key={prop.id}>
                <input 
                    type="checkbox" 
                    checked={prop.checked}
                    onChange={() => handleClick(prop.id)}
                />
                <label style={(prop.checked) ? {textDecoration: "line-through"} : null}>{prop.item}</label>
                <FaBeer 
                    role="button"
                    tabIndex="0"
                    onClick={() => handleDelete(prop.id)}
                    aria-label={`Delete ${prop.item}`}
                />
            </li>
            
            )
            :
            "List is Empty"
            }
    </ul>
    </>
}

export default Content