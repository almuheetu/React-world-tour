import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    useEffect(() =>{
       fetch('https://restcountries.com/v3.1/all') 
       .then(res => res.json())
       .then(data => setCountries(data));
    } , [])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        console.log(country);
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h5>Visited Countries : </h5>
            <ul>

            </ul>
           <div className="country-container">
           {
                countries.map(country =><Country
                     key={country.cca3}
                     handleVisitedCountry={handleVisitedCountry}
                     country={country}></Country>)
            }
           </div>
        
        </div>
    );
};

export default Countries;