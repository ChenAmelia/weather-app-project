import "./Header.scss";
import React from 'react'

const Header = (props) => {

    const {data} = props;

  return (
    <>
    <div className="headerContainer">

        <div className="headerContainer__temp">
            <h1>{data.current.temp_c}°</h1>
        </div>

        <div className="headerContainer__other">

            <div className="headerContainer__other--city">
                <h2>{data.location.name}</h2>
            </div>

            <div className="headerContainer__other--time">
                <h3>{data.location.localtime}</h3>
            </div>


        </div>





    </div>

    </>


  )
}

export default Header