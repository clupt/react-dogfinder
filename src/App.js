import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { useState } from 'react';
import axios from "axios";

/** App
 *
 *  Props:
 *      -none
 *
 *  State:
 *      -isLoading - keeps track of whether or not async fn is done awaiting
 *      -dogNames
 *       [{ name, age, src, facts }, ...]
 *
 *  App --> {Nav, Routes: DogList, DogDetails}
 */



function App() {

  const [dogNames, setDogNames] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** gets dog names and sets state for dogNames and isLoading */
  async function getDogNames() {
    const response = await axios.get("http://localhost:5001/dogs");
    const dogsInfo = response.data;
    const names = dogsInfo.map(d => d.name);
    setIsLoading(false);
    setDogNames(names);
  }
  if (isLoading) {
    getDogNames();
  }

  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
      {!isLoading && <Nav names={dogNames} />}
        <Routes>
          <Route element={ <DogList />} path="/dogs" />
          <Route element={ <DogDetails />} path="/dogs/:name" />
          <Route element={ <DogList />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
