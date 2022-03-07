import React from 'react';
import { Link } from 'react-router-dom';

function PropertyTypes({propertyType, photoUrl}) {
  return (
    <div className="resort-card">
      <Link to = {`/property/type`}>
        <img src={photoUrl} alt=""/>
      </Link>

      <div className="resortContent">
        <h3>{propertyType}</h3>
      </div>
    </div>
  );
};

export default PropertyTypes