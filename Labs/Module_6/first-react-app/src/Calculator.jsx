import { useState } from "react"

function CalculatorForm(props){
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);

    let result = 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        const rawFormData = new FormData(event.target);
        const data = Object.fromEntries(rawFormData);

        const operator = data.operator_input;
        const num_one = Number(data.num_one);
        const num_two = Number(data.num_two);

        switch (operator) {
            case "add":
                result = num_one + num_two;
                props.onCalculateResult(result);
                break;
            case "subtract":
                result = num_one - num_two;
                props.onCalculateResult(result);
                break;
            case "multiply":
                result = num_one * num_two;
                props.onCalculateResult(result);
                break;
            case "divide":
                result = num_one / num_two;
                props.onCalculateResult(result);
                break;
            default:
                console.log("got something wierd");
        }
    }

    const handleNumOneChange = (event) => {
        const newNumOneValue = event.target.value;
        setNumOne(newNumOneValue);
    }

    const handleNumTwoChange = (event) => {
        const newNumTwoValue = event.target.value;
        setNumTwo(newNumTwoValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="num_one" value={numOne} onChange={handleNumOneChange}/>
            <select name="operator_input">
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type="number" name="num_two" value={numTwo} onChange={handleNumTwoChange}/>
            <button>=</button>
        </form>
    )
}

function ResetCalculator(props){
    const handleReset = (event) => {
        props.onReset();
    }

    return (
        <button onClick={handleReset}>reset</button>
    )
}

function Calculator() {
    const [result, setResult] = useState(0);

    const outputResult = (value) => {
        setResult(value)
    }

    const resetResult = () => {
        setResult(0)
    }

    return (
        <div className="componentBox">
            <h2>Result:</h2>
            <h1>{result}</h1>

            <CalculatorForm onCalculateResult={outputResult}/>
            <ResetCalculator onReset={resetResult}/>
        </div>
    )
}

export default Calculator