import React from 'react';

import "./categoriesInfo.css";

export default (props) => {
  return (
    <div className="categoriesinfo">
      <h1 className="categoriesinfo__title">{props.name}</h1>
      <div className="categoriesinfo__underline"></div>
        <p className="categoriesinfo__description">
            {props.description}
        </p>
    </div>
  )
}
