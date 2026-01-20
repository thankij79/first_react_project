import React from 'react';

const DigiId = ({name,age,role,HandleDelete}) => {
 
  

  return (
    <div style={{
      backgroundColor: role==="Captain" ? "blue": role==="Engineer" ? "red":"transparent",
      display:"inline-block",
      margin:"10px",
      padding:"10px",
      border:"2px solid black",
      borderRadius:"10px",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center"
    }}>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>Role:{role}</h3>
      <button onClick={HandleDelete}>Delete</button>
    </div>
  )
}


export default DigiId