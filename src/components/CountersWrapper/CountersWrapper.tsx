import { observer } from "mobx-react-lite"
import CounterStore from "../../store/counter-store"
import Counter from "../Counter/Counter"

const counter = new CounterStore()

const CounterWrapper = () => {

    const { count, decrement, increment, total } = counter

    return (
        <>
            <div>
                <Counter
                    count = {count}
                    decrement = {decrement}
                    increment = {increment}
                    total = {total}
                />
            </div>
        </>
    )
}

export default observer(CounterWrapper)