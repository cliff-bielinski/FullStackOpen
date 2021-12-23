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
      <Part course={props.first} />
      <Part course={props.second} />
      <Part course={props.third} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.first.exercises + props.second.exercises + props.third.exercises}</p>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.course.name} {props.course.exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content first={part1} second={part2} third={part3} />
      <Total first={part1} second={part2} third={part3} />
    </div>
  )
}

export default App