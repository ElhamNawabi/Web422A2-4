import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
 
function Condo() {

    const[condo, setCondo] = useState([{
        _id: "",
        title: "",
        propertyType: "",
        location: "",
        rentalPrice: 0,
        bestSeller: "",
        photoUrl: ""
    }]);

    useEffect(() => {
        const URL = "http://localhost:8080/property/type/Condo";

        fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setCondo(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])

  return (
    <section id="section-condo-type">
    <div className="container">

      <h1>All Of Our Resort Condos</h1>

      <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      {condo?.map((condos) => (
           

            <Link to ={`/resort/${condo._id}`}>
            <h3>{condos.title}</h3>

            <img src={condos.photoUrl}   alt="poo"></img>
            
               
               <h3>{condos.location}</h3>
               <p>${condos.rentalPrice} per night</p>
               
               <h5>{condos.bestSeller}</h5>
                
              </Link>
            
          ))}
      </div>
    </div>
    </section>
  )
}

export default Condo