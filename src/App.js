import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';

/** App 
 * 
 * Props
 * -none
 * 
 * State
 * -isLoading
 * -dogs
 *  [{ name, age, src, facts }, ...]
 * 
 */



function App() {
  
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
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
