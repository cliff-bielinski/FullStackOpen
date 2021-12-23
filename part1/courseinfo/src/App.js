import React from 'react'

const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return(
    <>
      <p>
        {props.first} {props.firstCount}
      </p>
      <p>
        {props.second} {props.secondCount}
      </p>
      <p>
        {props.third} {props.thirdCount}
      </p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.first + props.second + props.third}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        first={part1} firstCount={exercises1} 
        second={part2} secondCount={exercises2} 
        third={part3} thirdCount={exercises3} 
      />
      <Total first={exercises1} second={exercises2} third={exercises3} />
    </div>
  )
}

export default App