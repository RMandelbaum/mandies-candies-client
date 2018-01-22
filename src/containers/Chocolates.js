import React from 'react';
import './Chocolates.css'

const Chocolates = (props) => {

  return (
    <div className="chocolate-container">
      <h1>Chocolate Type</h1>
      {props.chocolates.map( chocolate =>
        <div key={chocolate.id} className="chocolate-card">
           <img src={chocolate.img_url} alt={chocolate.chocolate_type}/>
           <h3>{chocolate.chocolate_type}</h3>

         </div>
       )
    }
      </div>
    )

}

export default Chocolates;
