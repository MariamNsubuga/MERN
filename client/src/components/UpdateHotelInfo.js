import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateHotelInfo(props) {
  const [hotel, setHotel] = useState({
    name: '',
    cuisine: '',
    location: '',
    image: '',
    
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/hotels/${id}`)
      .then((res) => {
        setHotel({
          name: res.data.name,
          cuisine: res.data.cuisine,
          location: res.data.location,
          image: res.data.image,
          
        });
      })
      .catch((err) => {
        console.log('Error from UpdateHotelInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: hotel.name,
      cuisine: hotel.cuisine,
      location: hotel.location,
      image: hotel.image,
      
    };

    axios
      .put(`http://localhost:8082/api/hotels/${id}`, data)
      .then((res) => {
        navigate(`/show-hotel/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateHotelInfo!');
      });
  };

  return (
    <div className='UpdateHotelInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hotel List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Hotel</h1>
            <p className='lead text-center'>Update Hotel's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
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
              <label htmlFor='isbn'>cuisine</label>
              <input
                type='text'
                placeholder='cuisine'
                name='cuisine'
                className='form-control'
                value={hotel.cuisine}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Location</label>
              <input
                type='text'
                placeholder='Location'
                name='location'
                className='form-control'
                value={hotel.location}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Image</label>
              <textarea
                type='text'
                placeholder='Image'
                name='image'
                className='form-control'
                value={hotel.image}
                onChange={onChange}
              />
            </div>
            <br />

            
            

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateHotelInfo;