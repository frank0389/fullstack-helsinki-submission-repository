import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [points, setPoints] =  useState([0,0,0,0,0,0,0,0]);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState("");

  const next =() => {
    var index = Math.floor(Math.random() * 8);
    setSelected(index);
  }

  const vote = ()=> {
      let copy = [... points];
      copy[selected]+=1;
     
      let mayor = 0;
      let index = 0;

      for(let i= 0;  i < copy.length; i++){
        console.log(copy[i]);
            if(copy[i] > mayor){
               mayor = copy[i];
               index = i;
            }
      }
      setMostVoted(anecdotes[index]);
      setPoints(copy);
  }

  return (
    <>
    <h1>Anecdote of the day </h1>
        <p>{anecdotes[selected]}</p>
        <p> has {points[selected]} votes</p>
        <button onClick={vote}>vote</button>
        <button onClick={next}>next anecdote</button>

        <h1>Anecdote with most vote </h1>
        <p>{mostVoted}</p>
    </>
  )
}

export default App
