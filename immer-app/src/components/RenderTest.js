import React from 'react'

const RenderTest = () => {

    console.log("렌더링 다시");

    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("setState: ", count); 
        setCount(count + 2);                      
        console.log("setState: ", count);   
        setCount(count + 1); 
        console.log("setState: ", count); 
    };
  
    return (
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}

export default RenderTest