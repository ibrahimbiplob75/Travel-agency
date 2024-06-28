import { useEffect, useState } from "react";
import ImageCard from "../ImageCard/ImageCard";


const SuggestedPlace = () => {

    const [places,setPlaces]=useState([])

    useEffect(()=>{
        fetch("../../../public/data.json")
          .then((res) => res.json())
          .then((data) => setPlaces(data.state));
        
    },[])
    
    return (
      <div>
        <h1 className="text-3xl ">Suggested Place</h1>
        <div className="grid grid-cols-3 gap-3 mt-10">
          {places.map((place) => (
            <ImageCard key={place.id} place={place}></ImageCard>
          ))}
        </div>
      </div>
    );
};

export default SuggestedPlace;