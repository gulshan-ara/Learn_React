import { useState } from 'react'

const Button = (props) => { 
  return (
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.name} {props.value}</p>
  )
}

const Statistics = (props) => {
  if(props.all !== 0){
    return(
      <div>
        <h1>Statistics</h1>
        <StatisticLine name="good" value={props.good}/>
        <StatisticLine name="neutral" value={props.neutral}/>
        <StatisticLine name="bad" value={props.bad}/>
        <StatisticLine name="all" value={props.all}/>
        <StatisticLine name="average" value={props.impression/props.all}/>
        <StatisticLine name="positive" value={props.good * 100/props.all}/>
      </div>
    )
  }
  return(
    <div>
      <h1>Statistics</h1>
      <p>No feedback given.</p>
    </div>
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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        impression={impression}
      />
    </div>
  )
}

export default App