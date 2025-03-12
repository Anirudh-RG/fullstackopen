import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'
import { anecdotes } from '../data/anecdotes'

const App = () => {
  const [anec,setAnec] = useState("");
  const [votes,setVotesArr] = useState(new Array(8).fill(0));
  // save clicks of each button to its own state
  const [mostVotedAnec,setMostVotedAnec] = useState("");
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum,setSum] = useState(0);
  const handleGoodClick = () => {
    setGood(good+1)
    setSum(sum+1);
  };
  const handleNeutralClick = () => {setNeutral(neutral+1);setSum(sum+1)};
  const handleBadClick = () => {setBad(bad+1);setSum(sum+1)};
  // console.log(anecdotes.length);
  const handleAnecdoteClick = () =>{
    var rand = (Math.random()*(8-1)+1).toFixed(0);
    console.log(rand)
    setAnec(anecdotes[rand-1]);
  }
  const handleVoting = () =>{
    if(anec === null || anec === ""){
      return;
    }else{
      let idx = anecdotes.findIndex(item => item === anec);
      setVotesArr(
        prevVotes =>{
          const newVotes = [...prevVotes];
          newVotes[idx]+=1;
          const maxVotes = Math.max(...newVotes);
          const maxIdx = newVotes.findIndex(vote => vote === maxVotes);
          setMostVotedAnec(anecdotes[maxIdx]);
          return newVotes;
        });
    }
  }

  const checkVotesNotNull = (votes) =>{
    for(let i = 0;i<votes.length;i++){
      if(votes[i] > 0)return true;
    }
    return false;
  }
    
  return (
    <div>
      {console.log(votes)}
      <h1> Display a random anecdote</h1>
      <button onClick={handleAnecdoteClick}>Get an anecdote</button>
      
      <p>
        {anec}
      </p>
      {
        anec !== "" ?
      <p> has {" "}
        {votes[anecdotes.findIndex(item => item === anec)]}
        {" "}votes
      </p>
      :
      <p>No anecdote selected</p>
}
      <button onClick={handleVoting}>Vote</button>
      <h2>Anecdote with mostvotes</h2>
      {
        checkVotesNotNull(votes) === true ?
        <p>{mostVotedAnec}</p>
        :
        <p>No Votes registered yet</p>
      }
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGoodClick}/>
      <Button text="neutral" onClick={handleNeutralClick}/>
      <Button text="bad" onClick={handleBadClick}/>
      {sum > 0 ? 
      <Statistics good={good} bad={bad} neutral={neutral} sum={sum}/>
      : <p>No statistics to display</p>}
    </div>
  )
}

export default App;