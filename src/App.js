import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [filterString, setFilterString] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePersonSearch = (event) => {
    setFilterString(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      phone: newPhone,
    };

    if (persons.filter((persons) => persons.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
  };

  const handlePersonNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePersonPhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handlePersonSearch} />

      <h2>add a new</h2>
      <PersonForm 
        handleSubmit={addPerson} 
        valueNewName={newName}
        valueNewPhone={newPhone}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonPhoneChange={handlePersonPhoneChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filterString={filterString} />
    </div>
  );

};

export default App;
