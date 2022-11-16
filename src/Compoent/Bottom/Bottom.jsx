import "./Bottom.scss";

import React from 'react'

const Bottom = (prop) => {

    const {data} = prop; 


  return (
    <>
    <div className="bottom">
        <div className="first">
            <p className="title">Feels like</p>
            <p className="content">{data.current.feelslike_c}</p>
        </div>

        <div className="second">
            <p className="title">Humidity</p>
            <p className="content">{data.current.humidity}</p>
        </div>

        <div className="third">
            <p className="title">Cloud</p>
            <p className="content">{data.current.cloud}</p>
        </div>


    </div>

    </>
  )
}

export default Bottom