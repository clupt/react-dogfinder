import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


/** DogDetails
 *
 *  props: name of dog
 */
function DogDetails () {
  console.log("dog details")

  const [dog, setDog] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()


  async function getDog() {
    const resp = await axios.get("http://localhost:5001/dogs")
    console.log(resp.data);
    const dog = resp.data.filter(d => d.name === params.name)[0];
    setDog(dog)
    setIsLoading(false)
  }
  if (isLoading) {
    getDog()
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