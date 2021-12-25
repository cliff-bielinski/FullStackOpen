import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <div>
    {props.anecdote} <br />
    has {props.count} votes
  </div>
)

const Header = (props) => <><h1>{props.title}</h1></>

const App = () => {
  const title = 'Anecdote of the day'
  const popularTitle = 'Anecdote with most votes'

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const max = Math.max(...points)
  const maxIndex = points.indexOf(max)

  const handleAnecdoteClick = () => {
    const next = Math.floor(Math.random() * anecdotes.length)
    setSelected(next)
  }

  const handleVoteClick = () => {
    const arrayCopy = [...points]
    arrayCopy[selected] += 1
    setPoints(arrayCopy)
  }

  return (
    <div>
      <Header title={title} />
      <Display anecdote={anecdotes[selected]} count={points[selected]} />
      <Button handleClick={handleVoteClick} text='vote' />
      <Button handleClick={handleAnecdoteClick} text='next anecdote' />
      <Header title={popularTitle} />
      <Display anecdote={anecdotes[maxIndex]} count={points[maxIndex]} />
    </div>
  )
}

export default App