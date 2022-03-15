import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';


function ResortDescriptionPage() {

   const [resort, setResort] = useState({
       _id: "",
       title:"",
       photoUrl:"",
       rentalPrice:"",
       description:"",
       propertyType: "",
       houseRules: "",
       amenities: "",
       location: "",
   });

   const {_id} = useParams()

   

   useEffect(()=>{

 

    const URL = `${process.env.REACT_APP_BACK_END_API_DOMAIN}/property/id/${_id}`
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
    
      setResort(json.result)

    
 
    })
    .catch(err=>console.log(err))


   },[])

  return (
    <div className="grid grid-row-3" id="main-container">

    <Header/>
    <main>
        <section id="resort-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img src={resort.photoUrl} alt=""/>
            
                <div className="resort-description-content-area">
                    <h2>{resort.title}</h2>
                    <p>${resort.rentalPrice}per night</p>
                    <h3>Details</h3>
                    <p>{resort.description}</p>
                    <p>{resort.propertyType}</p>
                    <p>{resort.houseRules}</p>
                    <p>{resort.location}</p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>

</div>
  )
}

export default ResortDescriptionPage