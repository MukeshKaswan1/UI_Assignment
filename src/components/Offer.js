import React from 'react';

function Offers() {
  const offers = [
    { name: 'Tortilla Wrap Tacos', discount: '15%', image: 'tacos.jpg' },
    { name: 'Dessert', discount: '20%', image: 'dessert.jpg' },
  ];

  return (
    <div className="offers">
      {offers.map((offer, index) => (
        <div key={index} className="offer">
          <img src={require(`../images/${offer.image}`).default} alt={offer.name} />
          <p>{offer.name}</p>
          <p>{offer.discount} Off</p>
        </div>
      ))}
    </div>
  );
}

export default Offers;
