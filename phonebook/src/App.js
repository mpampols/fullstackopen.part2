import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterString, setFilterString] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const handlePersonSearch = (event) => {
    setFilterString(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newPhone,
    };

    if (persons.filter((persons) => persons.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(personObject).then((response) => {
        setPersons(persons.concat(personObject));
      });
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
