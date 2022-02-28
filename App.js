import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowName from './ShowName';
let btnText="Change name";
function App() {
  const[name,setName]=useState("Sharan");
  const[showMyName, setShowMyName]=useState(false);
  const[students, setStudents]=useState([
    {name: "Sharan", about: "Teaching React", abc: "sharan"},
    {name: "John", about: "Learning React", abc: "john"},
    {name: "Mona", about: "Learning React", abc: "mona"},
    {name: "Preet", about: "Learning React", abc: "preet"}

  ]);
  const changeMyName=()=>{
   
   setShowMyName(!showMyName);
  };

  return <div>
      <button onClick={changeMyName}>{btnText}</button>
      {
         students.map(students=>{
           return <p><ShowName {...students} /></p>;
         })
      }
      {/* showMyName && <ShowName name={name} about={"Learning react"}/>
      <ShowName name={"Mona"}/>
      <ShowName name={"John"} about={"Learning js"} />
      <ShowName name={"Preet"} about={"Learning Angular"} /> */}

    </div>;
  
}

export default App;
