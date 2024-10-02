import React, { useCallback, useState } from 'react';

const RenderTest2 = () => {

  console.log("렌더링 다시");

  const [count, setCount] = useState({name : "충현"});

  // setCount(count)의 경우 렌더링이 실제로 일어나지 않는 것으로 보아
  // 내부적으로 새로운 객체를 힙메모리에 할당하지는 않는다.

  const handleClick = useCallback(() => {
    console.log("setState: ", count); 
    setCount(count);
  }, [count]);

  return (
    <div>
      <p>{count.name}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default RenderTest2