import { FaBeer } from 'react-icons/fa';

const Content = ({items, setItems, handleCheck, handleDelete}) => {
    
    
    return <>
    <ul>
        {
            
            items.length !== 0 ?
            items.map((prop) =>
            <li key={prop.id}>
                <input 
                    type="checkbox" 
                    checked={prop.checked}
                    onChange={() => handleCheck(prop.id)}
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