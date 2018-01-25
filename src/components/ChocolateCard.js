import React from 'react';

const ChocolateCard = ({ chocolate }) => (
  <div key={chocolate.id} className="chocolate-card">
    <img src={chocolate.img_url} alt={chocolate.chocolate_type}/>
    <h3>Type:{chocolate.chocolate_type}</h3>
  </div>
)

export default ChocolateCard;
