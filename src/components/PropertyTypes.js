import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';

function PropertyTypes() {
  //state
  const[resorts, setResorts] = useState([]);
  const setPicture = (photo) => {
    switch (photo) {
    case 'Condo':
      return "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
      
    case 'Villa':
      return "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
    case 'Beach house':
      return "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
    case 'Hotel':
      return "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg";
      
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
            <Link to ={`/resortType/${resort}`}>
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