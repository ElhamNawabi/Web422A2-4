import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function PropertyTypes() {
  //state
  const[resorts, setResorts] = useState([]);
  const setPicture = (photo) => {
    switch (photo) {
    case 'Condo':
      return "https://condonow.com/BIG-King-Toronto-Condos/images/BIG-King-Toronto-Condos-rendering1-full.jpg";
      
    case 'Villa':
      return "https://images.squarespace-cdn.com/content/v1/585562bcbe659442d503893f/c3b765c0-45e3-46b3-9ff9-b4101fb30674/01.+Exotik+Villas+Bali+-+Aloui.jpg";
    case 'Beach-house':
      return "https://images.trvl-media.com/hotels/37000000/36280000/36275400/36275335/468a8b77.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium";
    case 'Hotel':
      return "https://www.fairmont.com/assets/0/104/1785/1790/5059/5067/ba5c8a82-6dd5-4635-8ac8-f29dc63c9e9a.jpg";
      
    default:
      return null
  }}
  useEffect(() => {
    const URL = 'http://localhost:8080/property/type'

    fetch(URL)
    .then(response=>response.json())
    .then(json=> {

        setResorts(json.result)
       //console.log(resorts);
    })
    .catch(err => {console.log(err);})
  }, [])
  return (
    <section id="section-property-type">
    <div className="container">

    <h1>Select Your Resort Type</h1>

    <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
      
    {resorts?.map((resort, index) => (
            <div key={index} className="resort-card">
            <Link to ={`/${resort}`}>
            <img src={setPicture(resort)}   alt="poo"></img>
               <div className="resortContent">
               <h3>{resort}</h3>
               </div>
                
              </Link>
            </div>
          ))}
    </div>
    </div>
    </section>
    
  );
};

export default PropertyTypes