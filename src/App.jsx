import './App.scss';
import React from 'react';
import { useState, useEffect } from 'react';

import Header from './Compoent/Header/Header';
import Bottom from './Compoent/Bottom/Bottom';

import sunrise from "./assets/images/sunrise.png"
import sun from "./assets/images/sun.png";
import moon from "./assets/images/moon.png";

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);

  const url = `https://api.weatherapi.com/v1/current.json?key=0aac51725a3a4337bb5204630221011&q=${latitude},${longitude}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })
  }, [])

 
  const getData = async() => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data)
  }

  useEffect(() => {
    getData(url)
  });

  console.log(latitude);
  console.log(longitude);

  console.log(url);

  console.log(data);

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";
  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }
  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }


  return (
    <div className="app">

      <div className="app__greeting">
        
        <h1> Good {greetingTime} </h1>
        <img src={greetingImg} className="greeting__img" alt={greetingTime} />
        
      
      </div>

      

      <Header data={data}/>
      <Bottom data={data}/>

   
    </div>
  );
}

export default App;
