import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function BeachHouse(){

    const[beach, setBeach] = useState([{
        _id: "",
        title: "",
        propertyType: "",
        location: "",
        rentalPrice: 0,
        bestSeller: "",
        photoUrl: ""
    }]);

    useEffect(() => {
        const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/property/type/Beach-house`;

        fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setBeach(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])

  return (
    <section id="section-condo-type">
    <div className="container">

      <h1>All Of Our Resort Beach Houses</h1>

      <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      {beach?.map((beaches) => (
           

            <Link to ={`/resort/${beaches._id}`}>
            <h3>{beaches.title}</h3>

            <img src={beaches.photoUrl}   alt="poo"></img>
            
               
               <h3>{beaches.location}</h3>
               <p>${beaches.rentalPrice} per night</p>
               
               <h5>{beaches.bestSeller}</h5>
                
              </Link>
            
          ))}
      </div>
    </div>
    </section>
  )
}

export default BeachHouse