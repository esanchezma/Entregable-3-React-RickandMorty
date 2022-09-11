// Componente que va a mostrar cada uno de los itemn generados por list y Key y 
//esta url las va a consumir para mostrar informacion detallada de cda Residente

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles.css";

// Recibe de Locations la api que va a consumir
const ResidentInfo = ({ url }) => { 

const [resident, setResident] = useState({});


  useEffect(() => 
  {
    axios.get(url)
    .then((res) => setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        })   );
    
   }, [url, resident.status]);


  console.log(resident);
 

  return (
   
    <div className="col-md">          
      <div className="card"> 
        <img src={resident.image} alt="" />
          <div className="info">
            <ul> 
              <li>
                <p>
                  <b>{resident.name}</b>
                </p> 
                <p>
                 <span className= "circle green"></span>
                    {resident.status} - {resident.species}
                </p>      
                <p className="description">origin</p>            
                <p>{resident.origin}</p>
                <p className="description">episodes where appear</p>            
                <p>{resident.episodes}</p>
              </li>
            </ul>
        </div>   
      </div>
     </div>
  
  );
};


export default ResidentInfo;