import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const Statistics = (props) => {
  return (
    <p>{props.name} {props.value}</p>
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
 
  if(all !== 0){
    return (
      <div>
        <h1>give feedback</h1>
        <Button name="good" handleClick={handleGoodClick}/>
        <Button name="neutral" handleClick={handleNeutralClick}/>
        <Button name="bad" handleClick={handleBadClick}/>

        <h1>statistics</h1>
        <Statistics name="good" value={good}/>
        <Statistics name="neutral" value={neutral}/>
        <Statistics name="bad" value={bad}/>
        <Statistics name="all" value={all}/>
        <Statistics name="average" value={impression/all}/>
        <Statistics name="positive" value={good/all}/>
      </div>
    )
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleGoodClick}/>
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>

      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )
}

export default App