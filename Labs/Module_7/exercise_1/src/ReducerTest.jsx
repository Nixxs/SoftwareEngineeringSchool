import { useReducer } from "react";
import { useHelloWorld } from "./hooks/useHelloWorld";

const fruit_reducer = (state, action) => {
    switch (action) {
        case "random":
            state = "random fruit";
            return state
        case "apple":
            state = "apple"
            return state
        default:
            return "apple"
    }

}

function FruitBasket() {
    const [fruit, updateFruit] = useReducer(fruit_reducer, null)
    const message = useHelloWorld("nick");

    const handleRandomFruit = () => {
        updateFruit("random")
    }

    const handleAppleFruit = ()=>{
        updateFruit("apple")
    }

    return (
        <div className="componentBox">
            <p>Fruit Basket:</p>
            <b>{fruit}</b><br />
            <button onClick={handleRandomFruit}>
                RandomFruit
            </button>
            <button onClick={handleAppleFruit}>
                Apple
            </button>
            <p>{message}</p>
        </div>

    )
}

export default FruitBasket