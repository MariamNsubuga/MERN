import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';

function ShowHotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/hotels')
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowHotelList');
      });
  }, []);

  const hotelList =
    hotels.length === 0
      ? 'there is no hotel record!'
      : hotels.map((hotel, k) => <HotelCard hotel={hotel} key={k} />);

  return (
    <div className='ShowHotelList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Hotels List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-hotel'
              className='btn btn-outline-warning float-right'
            >
              + Add New Hotel
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{hotelList}</div>
      </div>
    </div>
  );
}

export default ShowHotelList;