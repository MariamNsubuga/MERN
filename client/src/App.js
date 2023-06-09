import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateHotel from './components/CreateHotel';
import ShowHotelList from './components/ShowHotelList';
import ShowHotelDetails from './components/ShowHotelDetails';
import UpdateHotelInfo from './components/UpdateHotelInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowHotelList />} />
          <Route path='/create-hotel' element={<CreateHotel />} />
          <Route path='/edit-hotel/:id' element={<UpdateHotelInfo />} />
          <Route path='/show-hotel/:id' element={<ShowHotelDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

