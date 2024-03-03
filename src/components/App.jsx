import React from "react";
import { useState } from "react";
import Heading from "./Header";
import Form from "./Form";
import List from "./Items";

function App() {
    const [items, setItems] = useState([]);
  return (
    <div className="container">
        <Heading />
        <Form 
        items={items}
        setItems={setItems}/>
        <List 
        items={items}
        />
    </div>
  );
}

export default App;
