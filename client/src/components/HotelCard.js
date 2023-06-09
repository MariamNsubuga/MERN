import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const HotelCard = (props) => {
  const hotel = props.hotel;

  return (
    <div className='card-container'>
      <img
        
        src='https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        alt='Hotels'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-hotel/${hotel._id}`}>{hotel.name}</Link>
        </h2>
        <h3>{hotel.cuisine}</h3>
        <p>{hotel.location}</p>
      </div>
    </div>
  );
};

export default HotelCard;

