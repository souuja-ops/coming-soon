import React,{useState} from 'react';
import "./Optin.css";

function Optin() {
  const [state,setState]=useState(false);
  let url="https://souuja-ops.github.io/";
  return (
    <div className="Optin">
     <a href={url}>Click To View The Website</a>
    </div>
  );
}


export default Optin;
