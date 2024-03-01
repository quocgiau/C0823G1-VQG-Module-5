import './App.css';
import {useState} from "react";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    let handleCount = () => {
        setCount1(count1 + 1);
    };
    let handleCount2 = () => {
        setCount2(count2 + 2);
    };
    return (
        <div className="centered-container">
            <p>Count: {count1}</p>
            <button onClick={handleCount}>Add 1</button>
            <p>Count: {count2}</p>
            <button onClick={handleCount2}>Add 2</button>
        </div>
    )
}

export default App;
