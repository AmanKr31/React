import { useState } from "react";

const Child2 = () => {
    let [fruit,setFruit] = useState("Apple");
    function handleClick(data){
        //alert(`This is handleClick function ${data}`)
        setFruit("Guava");
    }
    return (
        <div>
            <hr />
            <h2>This is child2.jsx</h2>
            <div>{fruit}</div>
            <button onClick={()=>handleClick('any data')}>Click ME!</button>
        </div>
    );
};

export default Child2;