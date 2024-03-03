import React from "react";
import { useState } from "react";

function Form(props)
{
    const [inputText,setInput]=useState("");
    function handleSubmit(event)
    {
        event.preventDefault();
        props.setItems([...props.items,inputText]);
        setInput("");
    }
    function handlePress(event)
    {
        if (event.key === "Enter") {
            handleSubmit(event);
          }
    }
    return (
        <div className="form">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={inputText}
          onKeyPress={handlePress}
        />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default Form;
