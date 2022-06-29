import React from "react";

function Inputarea(props){
    return (
        <div className="form">
          <input onChange={props.change} type="text" value={props.text} />
          <br /><button onClick={props.add}>
            <span>Add</span>
          </button>
          <button onClick={props.delete}>
          <span>Delete all</span>
        </button>
        </div>
      );
    }
    
export default Inputarea;
    