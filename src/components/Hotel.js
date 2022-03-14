import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function Hotel(){
    const[hotel, setHotel] = useState([{
        _id: "",
        title: "",
        propertyType: "",
        location: "",
        rentalPrice: 0,
        bestSeller: "",
        photoUrl: ""
    }]);

    useEffect(() => {
        const URL = "http://localhost:8080/property/type/Hotel";

        fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setHotel(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])
  return (
    <section id="section-condo-type">
    <div className="container">

      <h1>All Of Our Resort Hotels</h1>

      <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      {hotel?.map((hotels) => (
           

            <Link to ={`/resort/${hotels._id}`}>
            <h3>{hotels.title}</h3>

            <img src={hotels.photoUrl}   alt="poo"></img>
            
               
               <h3>{hotels.location}</h3>
               <p>${hotels.rentalPrice} per night</p>
               
               <h5>{hotels.bestSeller}</h5>
                
              </Link>
            
          ))}
      </div>
    </div>
    </section>
  )
}

export default Hotel