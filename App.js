import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import '/styles.css'

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([])

    const handleClick = () => {
        const newItems = [...items, input]
        if (!input) return
        setItems(newItems);
        setInput("");

    }

    const handleDelete = (itemtoDelete) => {
        const newItems = items.filter((item) => {
            return item !== itemtoDelete
        })
        setItems(newItems)
    }
    return (
        <div className="container">
            <h1>Shopping List</h1>
            <div className="box">
                <h2>Items To Buy</h2>
                <div className="input">
                    <input type="text" name="shopping"
                        id="shopping"
                        placeholder="Add a new item"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleClick}>Add</button>
                </div>
                <ul className="list-container">
                    {items.
                        map((item, index) => <div className="list-item" key={index}>
                            <li>{item}</li>
                            <button className="delete" onClick={() => handleDelete(item)}>X</button>
                        </div>
                        )}
                </ul>
            </div>
        </div>
    )
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);









