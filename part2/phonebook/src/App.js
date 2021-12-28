import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const Display = ({ title }) => <h2>{title}</h2>

const Person = ({ person }) => <>{person.name}: {person.number}</>

const Add = (props) => {
  const addPerson = (event) => {
    event.preventDefault()

    if (props.persons.some(person => person.name === props.newName)){
      window.alert(`${props.newName} is already added to the phonebook`)
    }

    else {
      const personObject = {
        name: props.newName,
        number: props.newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          props.setPersons(props.persons.concat(returnedPerson))
        })
    }

    props.setNewName('')
    props.setNewNumber('')
  }

  return (
    <div>
      <Display title="Add a person" />
      <form onSubmit={addPerson}>
        <div>name: <input value={props.newName} onChange={props.handleNameChange} /></div>
        <div>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Filter = ({ filter, setFilter, handleFilterChange }) => {
  return(
    <form>
      <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
    </form>
  )
}

const Numbers = ({ persons, filter, handleDelete }) => {
  const phonebook = filter
    ? persons.filter(person => 
      person.name
        .toLowerCase()
        .startsWith(filter.toLowerCase()))
    : persons
  
  return(  
    <div>
      <Display title="Numbers" />
      {phonebook.map(person => {
        return (
          <div key={person.id}>
            <Person key={person.id} person={person} />
            <button id={person.id} onClick={() => handleDelete(person)}>delete</button>
          </div>
        )}
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  const handleDelete = (target) => {
    if (window.confirm(`Delete contact: ${target.name}?`)){
      personService
      .remove(target.id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== target.id))
      })
    }
  }
  
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <Display title='Phonebook' />
      <Filter 
        filter={filter} 
        setFilter={setFilter} 
        handleFilterChange={handleFilterChange}
      />
      <Add 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <Numbers 
        persons={persons} 
        filter={filter} 
        handleDelete={handleDelete}  
      />
    </div>
  )
}

export default App