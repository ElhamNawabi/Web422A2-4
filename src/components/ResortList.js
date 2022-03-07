import React,{useState,useEffect} from 'react';
import PropertyTypes from "./PropertyTypes";

function ResortList() {

    //state
    const[resorts, setResorts] = useState([{
        propertyType: "",
        photoUrl: null
    }]);

    useEffect(() => {
        const URL = 'http://localhost:3000/property/type';

        fetch(URL)
        .then(response=>response.json())
        .then(json=> {
            setResorts(json)
        })
        .catch(err => {console.log(err);})
    }, [])
        
    return (
    <section id="section-resort-list">
        <div className = "container">

            <h1>Resort Types</h1>

            <div className ="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                {resorts.map(resort=> (
                    <PropertyTypes propertyType={resort.propertyType} photoUrl={resort.photoUrl} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ResortList