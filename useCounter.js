import { useState } from "react";

export const useCounter = (initialCounter = 10) => {

    const [counter, setCounter] = useState(initialCounter);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        //if (counter === 0 ) return
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialCounter);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}