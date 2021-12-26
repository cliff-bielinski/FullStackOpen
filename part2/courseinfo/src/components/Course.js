import React from 'react';

const Header = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <b>Total number of exercises {total}</b>
  ) 
}

const Part = ({ part }) => {
  return <div>{part.name} {part.exercises}</div>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) =>
      <Part key={part.id} part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course