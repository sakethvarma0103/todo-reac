import React from "react";
import { useState } from "react";

function List(props){
    const [finish,setfinish]=useState(false);
    function changeStyle()
    {
        setfinish(true);
    }
    return(
        <div>
        <ul>
            <li onClick={changeStyle}  style={{ textDecoration: finish ? "line-through" : "none" }}>{props.item}</li>
        </ul>
      </div>
    );
}

export default  List; 