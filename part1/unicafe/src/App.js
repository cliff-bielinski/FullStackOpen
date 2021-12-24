import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => <div><h1>{props.text}</h1></div>

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  
  // if no feedback given then give no feedback message instead of statistics
  if (sum === 0) {
    return <div><p>No feedback given</p></div>
  }

  return(
    <div>
      <p>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {sum} <br />
        average {(props.good - props.bad) / sum} <br />
        positive {props.good/sum * 100}% <br />
      </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //clicking each button increasing its state counter by 1
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const title = 'give feedback'
  const header = 'statistics'

  return (
    <div>
      <Display text={title} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Display text={header} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App