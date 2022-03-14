import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function Villa() {
    const[villa, setVilla] = useState([{
        _id: "",
        title: "",
        propertyType: "",
        location: "",
        rentalPrice: 0,
        bestSeller: "",
        photoUrl: ""
    }]);

    useEffect(() => {
        const URL = "http://localhost:8080/property/type/Villa";

        fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setVilla(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])
  return (
    <section id="section-condo-type">
    <div className="container">

      <h1>All Of Our Resort Villas</h1>

      <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      {villa?.map((villas) => (
           

            <Link to ={`/resort/${villas._id}`}>
            <h3>{villas.title}</h3>

            <img src={villas.photoUrl}   alt="poo"></img>
            
               
               <h3>{villas.location}</h3>
               <p>${villas.rentalPrice} per night</p>
               
               <h5>{villas.bestSeller}</h5>
                
              </Link>
            
          ))}
      </div>
    </div>
    </section>
  )
}

export default Villa