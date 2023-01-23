import React from 'react'
import ReactDOM from 'react-dom';
import Card from './components/cards.jsx';
import Sdata from "./components/Sdata.jsx"
import './CSS/cards.css';

function ncard(val) {
    return (
      <Card
        imgsrc={val.imgsrc}
        month={val.month}
        date={val.date}
        heading={val.heading}
        subheading={val.subheading}
        icon={val.icon}
        para={val.para}
  
      />
    );
  }
  
  ReactDOM.render(
    <>
      <h4 className='disc'>Discover Best Of Online Events</h4>
      {Sdata.map(ncard)}
    </>,
    document.getElementById('root')
  );

  export default ncard;