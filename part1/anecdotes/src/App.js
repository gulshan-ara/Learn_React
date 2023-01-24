import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4:0, 5:0, 6:0, 7:0})
  
  const handleVote = () => {
    let copy = {...vote}
    copy[selected] = copy[selected] + 1;
    setVotes(copy);
  }

  const maxVote = (obj) => {
  let max = Math.max(...Object.values(obj))
  return Object.keys(obj).filter(key => obj[key]==max)
  }
  console.log(maxVote(vote));
  
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleNextClick = () => {
    setSelected(randomNumberInRange(0, anecdotes.length - 1));
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={handleVote}>votes</button>
        <button onClick={handleNextClick}>next anecdotes</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[maxVote(vote)]}
      </div>
    </div>
  )
}

export default App