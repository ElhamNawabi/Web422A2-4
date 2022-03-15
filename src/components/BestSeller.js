import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';


function BestSeller() {

    const[best, setBest] = useState([{
        _id: "",
        location: "",
        rentalPrice: 0,
        photoUrl: ""
    }]);

    useEffect(() => {
        const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/property/bestseller/true`;

        fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setBest(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])

  return (
    <section id="section-bestSeller-type">

    <div className="container">

        <h1>Our Best Sellers</h1>

        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
        {best?.map((seller) => (
            <div className="bestSeller-card">

            <Link to ={`/resort/${seller._id}`}>
            <img src={seller.photoUrl}   alt="poo"></img>

               <div className="bestSellerContent">
               <h3>{seller.location}</h3>
               <p>${seller.rentalPrice} per night</p>
               </div>
                
              </Link>
            </div>
          ))}
        </div>
    </div>

    </section>  
    
  )
}

export default BestSeller