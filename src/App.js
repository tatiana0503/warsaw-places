import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [place, setPlace] = useState(data);

  const removePlace = (index) => {
    let newPlace = place.filter(element => element.index !== index);
    setPlace(newPlace);
  }

  return (
    <div>
      <div className='container'>
        <h1>TOP {place.length} PLACES TO VISIT IN WARSAW</h1>
      </div>
      {place.map((item => {
        const {index, name, image} = item;
        return (
          <div key={index}>
            <div className='container'>
              <h2>{index} - {name}</h2>
            </div>
            <div className='container'>
              <img src={image} width="500px" alt="place"/>
            </div>
            <div className='container'>
              <button onClick={() => removePlace(index)}>REMOVE</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
        <button onClick={() => setPlace([])}>DELETE ALL</button>
        </div>
      
    </div>
  );
}

export default App;
