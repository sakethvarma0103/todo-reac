import React from "react";

function List(props){
    return(
        <div>
        <ul>
          {props.items.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    );

}

export default  List; 