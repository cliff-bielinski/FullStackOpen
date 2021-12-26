import React, { useState } from 'react'

const Display = ({ title }) => <h2>{title}</h2>

const Person = ({ person }) => <div>{person.name}: {person.number}</div>

const Numbers = ({ persons }) => {
  return(  
    <div>
      <Display title="Numbers" />
      {persons.map(person => <Person key={person.id} person={person} />)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890', id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to the phonebook`)
    }

    else {
      const personObject = {
        name: newName,
        number: '123-456-7890',
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
    }
    
    setNewName('')
  }

  return (
    <div>
      <Display title='Phonebook' />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons={persons}/>
    </div>
  )
}

export default App