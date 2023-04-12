import { useState } from "react";
const Footer = () => {
    const [count, setCount] = useState(1);
    const today= new Date();
    const handleClick = () => {
        setCount((prev) => prev+1);
        console.log(count);
    }
    return <footer>
        <button onClick={handleClick}>click me</button>
       <p>{count} copyright &copy; {today.getFullYear()}</p> 
    </footer>
}

export default Footer