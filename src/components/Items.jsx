import React from "react";

function List(props) {
  function removeItem(itemToRemove) {
    props.setItems(props.items.filter(item => item !== itemToRemove));
  }

  return (
    <div>
      <ul>
        {props.items.map((x, index) => (
          <li key={index} onClick={() => removeItem(x)}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
