import React from "react";

export default function LogButton(WrappedComponent, info) {
  const clickHandler = (e) => {
    console.log("Bilesen LogButton");
  };
  return (props) =>{
    return (
        <div>
        <button onClick={clickHandler}>Log Yaz</button>
        <WrappedComponent {...props} />
      </div>
    )
  };
}
