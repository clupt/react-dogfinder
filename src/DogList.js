import { useState } from "react";
import axios from "axios";
import DogDetails from "./DogDetails";

// import { v4 as uuid } from "uuid";

/** DogList
 *
 * state: the list of dogs [{"name": "Whiskey", "age": 5, "src": "whisk ...}]
 */

function DogList() {

  const [allDogs, setAllDogs] = useState(null);
  console.log("doglist=", allDogs);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const response = await axios.get("http://localhost:5001/dogs");
    const dogsInfo = response.data;
    for (let i = 0; i < dogsInfo.length; i++) {
      dogsInfo[i].key = i;
    }
    console.log("dogsInfo=", dogsInfo);
    setAllDogs(dogsInfo);
    setIsLoading(false);
  }

  getDogs();

  return (
    <div className="DogList">
      {!isLoading
        ? <div>{allDogs.map((d) => (
          <div>
            <DogDetails
              name={d.name}
              age={d.age}
              facts={d.facts}
            />
          </div>
        ))
        }
        </div>
        : <div>"Still getting dogs"</div>
      }
    </div>
  );
}


export default DogList;