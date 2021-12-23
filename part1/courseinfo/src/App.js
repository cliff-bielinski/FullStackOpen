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
      <Part course={props.courses[0]} />
      <Part course={props.courses[1]} />
      <Part course={props.courses[2]} />
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>
        Number of exercises {
          props.courses[0].exercises + 
          props.courses[1].exercises + 
          props.courses[2].exercises
        }
      </p>
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content courses={parts} />
      <Total courses={parts} />
    </div>
  )
}

export default App