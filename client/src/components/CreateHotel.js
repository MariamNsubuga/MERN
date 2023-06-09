import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateHotel = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    
    name: '',
    cuisine: '',
    location: '',
    image: '',
    
  });

  const onChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/hotels', hotel)
      .then((res) => {
        setHotel({
            name: '',
            cuisine: '',
            location: '',
            image: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateHotel!');
      });
  };

  return (
    <div className='CreateHotel'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hotel List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Hotel</h1>
            <p className='lead text-center'>Create new Hotel</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the Hotel'
                  name='name'
                  className='form-control'
                  value={hotel.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Cuisine Type'
                  name='cuisine'
                  className='form-control'
                  value={hotel.cuisine}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Location'
                  name='location'
                  className='form-control'
                  value={hotel.location}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Image'
                  name='image'
                  className='form-control'
                  value={hotel.image}
                  onChange={onChange}
                />
              </div>

                            
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;

