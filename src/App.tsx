import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
type PropsType={
  body:string
  userId:number
  id: number
  title:string
}

function App() {
  const[state,setState]=useState<PropsType[]>([])
  console.log(state)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setState(json))
  },[])
const deleteHandler=()=>{
      setState([])
}




    const postsHandler=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }
  return (
    <div className="App">
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={postsHandler}>ShowPosts</button>
      <ul>
      {state.map((el)=>{
      return(

            <li key={el.id}>
              <span>{el.id}</span>
              <span>{el.title}</span>
              <span>{el.userId}</span>

            </li>
      )
      })}
      </ul>
    </div>
  );
}

export default App;
