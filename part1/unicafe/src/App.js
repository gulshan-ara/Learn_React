import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const impression = good - bad

  const handleGoodClick = () => {
    console.log('Good button Clicked!');
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    console.log('Neutral button Clicked!');
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    console.log('Bad button Clicked!');
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGoodClick}/>
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {impression/all}</p>
      <p>positive {good/all}</p>
    </div>
  )
}

export default App