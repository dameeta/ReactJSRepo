import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowName from './ShowName';

function App() {
  const[name,setName]=useState("Vikash");

  const changeMyName=()=>{
    console.log("Button clicked");
    setName("Some other name");
  };
  return <div>
      <h1>{name}</h1>
      <button onClick={changeMyName}>Change name</button>
      <ShowName name={name} about={"Learning react"}/>
      <ShowName name={"Harpreet"}/>
      <ShowName name={"John"} about={"Learning js"} />
      <ShowName name={"Preet"} about={"Learning Angular"} />

    </div>;
  
}

export default App;
