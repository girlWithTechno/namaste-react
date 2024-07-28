import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [decreaseCount, setDecreaseCount] = useState(0);
    
    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h2>Count: {count}</h2>
            <h3>Count 2: {decreaseCount}</h3>
            <button onClick={()=>setCount(prev=>prev+1)}>Toggle counter</button>
            <h3>Location: Dehradun</h3>
        </div>
    )
}

export default User;