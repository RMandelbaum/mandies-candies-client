import React from 'react';
import { Link } from 'react-router-dom';

const ChocolatesList = ({ chocolates }) => {
  const renderChocolates = chocolates.map(chocolate =>
    <Link
    to={`/chocolates/${chocolate.id}`}>{chocolate.chocolate_type}</Link>
  )

  return (
    <div>
      {renderChocolates}
    </div>
  )
}

export default ChocolatesList;
