import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
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
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGoodClick}/>
      <Button text="neutral" onClick={handleNeutralClick}/>
      <Button text="bad" onClick={handleBadClick}/>
      <h1>Statistics</h1>
      <p>good is {good}</p>
      <p>neutral is {neutral}</p>
      <p>Bad is {bad}</p>
      <p>All revievws are {sum}</p>
      {/* <p>Average is {(good/(good+bad)) === NaN ? 0:(good/(good+bad))}</p> */}
      <p>Average is {sum>0?(good/(good+bad)).toFixed(2):"No data to find avg on"} </p>
      <p>positive reviews are {sum>0?((good/sum)*100).toFixed(2) + "%" : "no data to find positive"}</p>
    </div>
  )
}

export default App;