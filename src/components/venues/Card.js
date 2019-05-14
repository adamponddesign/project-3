import React from 'react'

const Card = ({ name, images, address1 }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={images} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>{address1}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
