import { observer } from "mobx-react-lite"

interface CounterProps {
    count: number;
    decrement: (value: number) => void;
    increment: (value: number) => void;
    total: number;
}

const Counter = ({ count, decrement, increment, total }: CounterProps) => {

    return (
        <>
            <h3>{count}</h3>
            <button onClick = {() => increment(3)}>+</button>
            <button onClick = {() => decrement(3)}>-</button>
        </>
    )
}

export default Counter