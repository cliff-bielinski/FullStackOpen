import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => <div><h1>{props.text}</h1></div>

const StatisticLine = (props) => <>{props.text} {props.value}<br /></>

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const pos = (props.good/sum * 100) + '%'
  
  // if no feedback given then give no feedback message instead of statistics
  if (sum === 0) {
    return <div><p>No feedback given</p></div>
  }

  return(
    <div>
      <p>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={sum} />
        <StatisticLine text='average' value={(props.good - props.bad) / sum} />
        <StatisticLine text='positive' value={pos} />
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