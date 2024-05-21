import React from 'react';
import '../common/static/css/home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='sub-container'>
      <div className='information-container'>
        <form className='form-grid'>
          <div className='grid-title'>
            <h5>Profile Details</h5>
          </div>
          <div className='form-item form-name'>
            <label htmlFor='user-name'>Name Of User:</label>
            <span>Radhika Atul Patil</span>
          </div>
          <div className='form-item form-email'>
            <label htmlFor='email'>Email:</label>
            <span>radhikajadhbv227@gmail.com</span>
          </div>
          <div className='form-item form-address'>
            <label htmlFor='address'>Address:</label>
            <span>Kolhapur, Takala Rajaram road, </span>
          </div>
          <div className='form-item form-city'>
            <label htmlFor='city'>City:</label>
            <span>Kolhapur</span>
          </div>
          <div className='form-item form-state'>
            <label htmlFor='state'>State:</label>
            <span>Maharashtara</span>
          </div>
          <div className='form-item form-pin'>
            <label htmlFor='zip'>Pin Code:</label>
            <span>416216</span>
          </div>
          <div className='form-item form-phone'>
            <label htmlFor='phone'>Phone:</label>
            <span></span>
          </div>
          <div className='form-item form-address'>
            <label htmlFor='address'>Address:</label>
            <span></span>
          </div>
          <div className='form-group'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Home;
