import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowHotelDetails(props) {
  const [hotel, setHotel] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/hotels/${id}`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowHotelDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/hotels/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowHotelDetails_deleteClick');
      });
  };

  const HotelItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{hotel.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Cuisine</td>
            <td>{hotel.cuisine}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Location</td>
            <td>{hotel.location}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Image</td>
            <td>{hotel.image}</td>
          </tr>
         
          
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowHotelDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hotel List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Hotel's Record</h1>
            <p className='lead text-center'>View Hotel's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{HotelItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(hotel._id);
              }}
            >
              Delete Hotel
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-hotel/${hotel._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Hotel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowHotelDetails;



