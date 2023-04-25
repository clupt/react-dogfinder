import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/** DogList
 *
 * State:
 *      allDogs: the list of dogs [{"name": "Whiskey", "age": 5, "src": "whisk ...}]
 *      isLoading: keeps track of if the async fn is done
 */

function DogList() {

  const [allDogs, setAllDogs] = useState(null);
  console.log("doglist=", allDogs);
  const [isLoading, setIsLoading] = useState(true);

  /** gets all dogs and sets allDogs and isLoading state */
  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    const dogsInfo = response.data;
    for (let i = 0; i < dogsInfo.length; i++) {
      dogsInfo[i].key = i;
    }
    console.log("dogsInfo=", dogsInfo);
    setIsLoading(false);
    setAllDogs(dogsInfo);
  }
  if (isLoading) {
    getDogs();
    return <div>Still getting dogs</div>
  }

  return (
    <div className="DogList">
        <div>{allDogs.map((d) => (
          <div key={d.key}>
            <Link to={`/dogs/${d.name}`}>
              <img src={`/${d.src}.jpg`} width={200} alt={d.name}/>
              <h4>{d.name}</h4>
            </Link>
          </div>
        ))
        }
        </div>
    </div>
  );
}


export default DogList;