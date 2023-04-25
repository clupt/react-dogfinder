import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


/** DogDetails
 *
 *  State: dog, isLoading
 *
 *  App --> DogDetails
*/

function DogDetails () {
  const [dog, setDog] = useState(null);
  console.log("dog details=", dog);
  const [isLoading, setIsLoading] = useState(true);
  console.log("isLoading=", isLoading);
  const navigate = useNavigate();
  const params = useParams();

  /** gets a single dog and updates state for dog and isLoading */
  async function getDog() {
    const resp = await axios.get("http://localhost:5001/dogs")
    console.log(resp.data);
    //TODO: use find instead of filter here
    const dog = resp.data.filter(d => d.name === params.name)[0];
    if(!dog || dog === undefined){
      navigate("/");
    }
    setDog(dog);
    setIsLoading(false);
  }

  if (isLoading || dog.name !== params.name) {
    getDog();
  }

  return (
    <div className="DogDetails">
      {isLoading
      ? <p>Loading!</p>
      : <div>
        <h1>{dog.name}</h1>
        <h4>Age: {dog.age}</h4>
        <img src={`/${dog.src}.jpg`} alt={dog.name} />
        <ul>
          {dog.facts.map((f, idx) => <li key={idx}>{f}</li>)}
        </ul>
        </div>
      }
    </div>
  )
}

export default DogDetails;