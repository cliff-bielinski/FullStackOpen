import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => <div><h1>{props.text}</h1></div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad

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
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {sum} <br />
        average {(good - bad) / sum || 0} <br />
        positive {good/sum * 100 || 0}% <br />
      </p>
    </div>
  )
}

export default App