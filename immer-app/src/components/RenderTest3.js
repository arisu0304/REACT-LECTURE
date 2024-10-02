import React, { useCallback, useState } from 'react';

const RenderTest3 = () => {

  console.log("렌더링 다시");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("setState: ", count); 
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default RenderTest3