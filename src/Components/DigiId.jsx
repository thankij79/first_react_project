import React from 'react'
import "./DigiId.css"

const DigiId = ({ name, role, age }) => {
  const getRoleClass = () => {
    if (role === 'Captain') return 'card-captain';
    if (role === 'Engineer') return 'card-engineer';
    return 'card-default';
  };

  return (
    <div className={`id-card ${getRoleClass()}`}>
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
      </div>
      <div className="card-body">
        <div className="card-row">
          <span className="card-label">Role:</span>
          <span className="card-value">{role}</span>
        </div>
        <div className="card-row">
          <span className="card-label">Age:</span>
          <span className="card-value">{age} years</span>
        </div>
      </div>
      <div className="card-footer">
        <p className="card-footer-text">AUTHORIZED PERSONNEL</p>
      </div>
    </div>
  );
};


export default DigiId;