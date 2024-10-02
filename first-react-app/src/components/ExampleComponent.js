import React, { useState } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    console.log("Component re-rendered");
    console.log("setCount reference:", setCount);  // 동일한 함수 참조 확인

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default ExampleComponent;