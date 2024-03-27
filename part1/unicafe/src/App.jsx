import { useState } from 'react'
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onClikedGoodButton =()=> {
    const newGood = good+1;
    setGood(newGood);
  }

  const onClikedNeutralButton =()=>{
    const newNeutral = neutral+1;
    setNeutral(newNeutral);
  }

  const onClikedBadButton =()=>{
     const newbad = bad+1;
     setBad(newbad);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
         <Button onClickHandler={onClikedGoodButton} text="good"/>
         <Button onClickHandler={onClikedNeutralButton} text="neutral"/>
         <Button onClickHandler={onClikedBadButton} text="bad"/>
      </div>
      { good != 0?<Statistics good={good} neutral={neutral} bad={bad}/>:<p> No feedback given</p>}
    </div>
  )
}

export default App