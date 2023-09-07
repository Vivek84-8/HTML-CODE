import React from "react";
import mylogo from '../logo.svg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/myimg.webp")`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <h1>Booking App</h1>
      <h1 className="myclass">Online Parking System</h1>
      <input type="text" />
      <h2 style={{ color: "green", fontSize: 30 }}>Using Inline CSS</h2>
      <img src="/https://github.com/jahanzaibsheikh830/Parking-Booking_App-React/blob/master/client/src/assets/bg.jpg?raw=true" alt="" />

     

    </div>
  );
};

export default Home;