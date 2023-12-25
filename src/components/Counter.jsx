import React, { useState } from "react";


function Counter() {

    const [count, setLikes] = useState(0);

    function plus() {
        setLikes(count + 1)
      }
    
      function minus() {
        setLikes(count - 1)
      }

      return (
        <div>
            <h1>{count}</h1>
            <button onClick={minus}>минус</button>
            <button onClick={plus}>плюс</button>
        </div>    
      );
    
} 


export default Counter;