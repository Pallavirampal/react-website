import React from "react";
import Sdata from "../components/Sdata.jsx"
import Card from '../components/cards.jsx';

import '../CSS/cards.css';

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
function Container() {
    return (
        <>
            <div className="container">
            {Sdata.map(ncard)}
            </div>
        </>
    )

}
export default Container;