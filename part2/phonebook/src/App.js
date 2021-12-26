import React, { useState } from 'react'

const Display = ({ title }) => <h2>{title}</h2>

const Person = ({ person }) => <div>{person.name}: {person.number}</div>

const Add = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to the phonebook`)
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <Display title="Add a person" />
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => setFilter(event.target.value)

  return(
    <form>
      <div>filter shown with <input value={filter} onChange={handleFilterChange} /></div>
    </form>
  )
}

const Numbers = ({ persons, filter }) => {
  const phonebook = filter
    ? persons.filter(person => 
      person.name
        .toLowerCase()
        .startsWith(filter.toLowerCase()))
    : persons

  return(  
    <div>
      <Display title="Numbers" />
      {phonebook.map(person => <Person key={person.id} person={person} />)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')
  
  return (
    <div>
      <Display title='Phonebook' />
      <Filter filter={filter} setFilter={setFilter} />
      <Add persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App