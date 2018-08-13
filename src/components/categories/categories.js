import React from 'react'

import "./categories.css";

export default (props) => {
  return (
    <div className="categories">
      {
        props.data.map(category => {
          return (
          <div key={category.name} className="categories__single-category"
          onClick={()=> props.selectCategory(category.name)}>
            <img
            className="categories__image"
            src={require(`./../../assets/svg/${category.image}.svg`)}
            alt={category.name} />
            <h3 className="categories__title">{category.name}</h3>
          </div>)
        })
      }
    </div>
  )
}
