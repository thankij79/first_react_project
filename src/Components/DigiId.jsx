import React from 'react';

const DigiId = ({name,age,role}) => {
  

  return (
    <div style={{
      backgroundColor: role==="Captain" ? "blue": role==="Engineer" ? "red":"transparent"
    }}>
      <h1>Name{name}</h1>
      <h2>Age{age}</h2>
      <h3>Role{role}</h3>
    </div>
  )
}

export default DigiId