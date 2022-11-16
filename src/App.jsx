import './App.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Compoent/Header/Header';
import Bottom from './Compoent/Bottom/Bottom';
import TodoList from './Compoent/TodoList/TodoList';

const key = `0aac51725a3a4337bb5204630221011`;

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState([]);

  //const url = `https://api.weatherapi.com/v1/current.json?key=0aac51725a3a4337bb5204630221011&q=${latitude},${longitude}`;
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })

    let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${latitude},${longitude}`
    axios.get(url)
     .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
  }, [])



 
  // const getData = async() => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setData(data)
  // }

  // useEffect(() => {
  //   getData(url)
  // });

  console.log(latitude);
  console.log(longitude);
  console.log(data);

  //console.log(url);

  // console.log(data);

  const currentHour = new Date().getHours();
  let greetingTime = "Morning!";
  if (currentHour >= 12) {
    greetingTime = "Afternoon!";
  }
  if (currentHour >= 18) {
    greetingTime = "Evening!";
  }


  return (
    <div className="app">

      <div className="app__greeting">
        <h1> Good {greetingTime} </h1>
      </div>

      <Header data={data}/>
      <Bottom data={data}/>
      <TodoList />
      

   
    </div>
  );
}

export default App;
