import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function ResortList() {

  const[listing, setListing] = useState([{
    _id: "",
    title: "",
    propertyType: "",
    location: "",
    rentalPrice: 0,
    bestSeller: "",
    photoUrl: ""
}]);

useEffect(() => {
    const URL = "http://localhost:8080/property";

    fetch(URL)
.then(response=>response.json())
.then(json=> {

    setListing(json.data)
   //console.log(resorts);
})
.catch(err => {console.log(err);})
}, [])

  return (
    <section id="section-resortListing-type">
    <div className="container">

      <h1>All Resort Listing</h1>

      <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      {listing?.map((resListing) => (
           

            <Link to ={`/resort/${resListing._id}`}>
            <h3>{resListing.title}</h3>

            <img src={resListing.photoUrl}   alt="poo"></img>
            
               
               <h3>{resListing.location}</h3>
               <p>${resListing.rentalPrice} per night</p>
               <h5>{resListing.propertyType}</h5>
               <h5>{resListing.bestSeller}</h5>
                
              </Link>
            
          ))}
      </div>
    </div>
    </section>
  )
}

export default ResortList