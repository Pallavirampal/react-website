import React from "react";
import '../CSS/cards.css';


function Card(props) {
    // console.log(props);
    return (
      <>
          <div className='card'>
            <img src={props.imgsrc} alt="" style={{width:"360px",height : "150px"}}/>
            <div className='card-info'>
              <div className='date'>
                <h1>{props.month}</h1>
                <p>{props.date}</p>
              </div>
              <div className='title'>
                <h1>{props.heading}</h1>
                <p>{props.subheading}</p>
                <div className='icon'>
                  <i class={props.icon}></i>
                  <p>{props.para}</p>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }

export default Card;
