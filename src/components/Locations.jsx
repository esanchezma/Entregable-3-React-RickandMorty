import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";


const Locations = () => {
  const [rickandmorty, setRickandmorty] = useState({});
  // Creo un estado para buscar el id
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    // Creo un ramdon para los que tome cada id del 1 al 126
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios      
       .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setRickandmorty(res.data));
  }, []);

  // Creo una funcion para Buscar el id y muestre el nombre en el input

  const searchType = () => {

    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setRickandmorty(res.data));
  };

  console.log(rickandmorty);

  return (
    <div className="Container">
     <div className="text-center">

          <input
            type="text"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            placeholder="type a location"
          />
          <button onClick={searchType} >Search</button>


      </div>
      <div > 
           <h2 className= "text-center">{rickandmorty.name}</h2>        
      </div>
      <div className= "row text-center"> 
          
          <div className= "col"> 
             <b>type: </b>
             {rickandmorty.type}
           </div>

           <div className= "col">  
             <b>Dimension: </b>
             {rickandmorty.dimension}
           </div>
           
          <div className= "col"> 
             <b>Population: </b>
            {rickandmorty.residents?.length}
          </div> 

       </div>
       
        {/* Listas y Keys  */}
        <div><h3>Residents</h3></div>
        <div className= "row">
            {rickandmorty.residents?.map((resident) => (
            // Promps y paso por paramaetros el url y la key de la lista
              < ResidentInfo 
              key={resident} 
              url={resident} />
              
              ))}           
        </div>
        
     </div>
  );
};

export default Locations;