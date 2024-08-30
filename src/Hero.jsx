import React, { useState } from "react";
import Modal from "./Modal";
import tech from "./Card";

function Card(props){
  const [num, updateNum] = useState(1);
  console.log(num);
  const [success, setSuccess] = useState("");

  const toCart = () => {
    // alert(num + " added to cart");
    setSuccess(`Success! ${num} month(s) added to cart!`)
  };

  const plus1 =() => {
    updateNum(num + 1);
  };

  const minus1 = () => {
    if (num <= 1) {
      alert("Number cannot be less than one.");
      return;
    }
      updateNum(num - 1);
    };

    return(
      <div className="card" style={{ border: '2px solid #007bff', padding: '10px', margin: '10px', backgroundColor: '#e0f7fa' }}>
      <img src={props.imgurl} alt={"card image"} style={{ width: '100%',  borderRadius: '5px' }} />
      <h2>{props.title || "Default Title"}</h2>
      <p>{props.description1 || "Default description line 1"}</p>
      {/* <button className="modalbutton" >View Plans</button> */}
      <button className="modalbutton" >View Plans</button>


      <div className="counterBtnWrap">
        <button className="counterBtn" onClick={minus1}>-</button>
        <p><span className="counter">{num}</span></p>
        <button className="counterBtn" onClick={plus1}>+</button> 
</div>
      <div>
      <button className="atcBtn" type="button" onClick={toCart}>Add to cart</button>
      </div>
      <div>
      <p><span className="qtyAdded">{success}</span></p>
      </div>


    </div>
    );
  }

  function createtechcard(p){
    
    return(
      <div className="cards-container" >
      <Card 
            key={p.techID}
            title={p.name}
            description1={`${p.desc}`}
            imgurl={p.imgurl}

            />
      </div>
    )
  }


const Hero = () => {
    return(
        <div className="heroblock">
            <div className="content">
                <h1 style={{ textShadow: '2px 5px 1px rgba(0, 0, 0, 0.3)' }}>Strategy and growth solutions for your business</h1>
                <h3>Welcome to our business and corporate consultation services </h3>
            </div>
            {tech.map(createtechcard)}
        </div>

    );

}
export default Hero;