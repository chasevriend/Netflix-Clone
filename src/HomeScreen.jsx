import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* NavBar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Rows */}
    </div>
  )
}

export default HomeScreen;