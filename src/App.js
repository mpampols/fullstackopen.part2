import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { key: 0, name: "Arto Hellas", number: "040-123456" },
    { key: 1, name: "Ada Lovelace", number: "39-44-5323523" },
    { key: 2, name: "Dan Abramov", number: "12-43-234345" },
    { key: 3, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [filterString, setFilterString] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
      <Filter />
      <h2>add a new</h2>
      <PersonForm />
      <h2>Numbers</h2>
      <div>
        <Persons />
      </div>
    </div>
  );

  // From previous exercises of this part...

  // const [notes, setNotes] = useState([]);
  // const [newNote, setNewNote] = useState("a new note...");
  // const [showAll, setShowAll] = useState(true);

  // const addNote = (event) => {
  //   event.preventDefault();
  //   const noteObject = {
  //     content: newNote,
  //     date: new Date().toISOString(),
  //     important: Math.random() < 0.5,
  //     id: notes.length + 1,
  //   };

  //   setNotes(notes.concat(noteObject));
  //   setNewNote("");
  // };

  // const handleNoteChange = (event) => {
  //   setNewNote(event.target.value);
  // };

  // const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  // return (
  //   <div>
  //     <h1>Notes</h1>
  //     <div>
  //       <button onClick={() => setShowAll(!showAll)}>
  //         show {showAll ? "important" : "all"}
  //       </button>
  //     </div>
  //     <ul>
  //       {notesToShow.map((note) => (
  //         <Note key={note.id} note={note} />
  //       ))}
  //     </ul>
  //     <form onSubmit={addNote}>
  //       <input value={newNote} onChange={handleNoteChange} />
  //       <button type="submit">save</button>
  //     </form>
  //   </div>
  // );

  // const courses = [
  //   {
  //     id: 1,
  //     name: "Half Stack application development",
  //     parts: [
  //       {
  //         name: "Fundamentals of React",
  //         exercises: 10,
  //         id: 1,
  //       },
  //       {
  //         name: "Using props to pass data",
  //         exercises: 7,
  //         id: 2,
  //       },
  //       {
  //         name: "State of a component",
  //         exercises: 14,
  //         id: 3,
  //       },
  //       {
  //         name: "Redux",
  //         exercises: 11,
  //         id: 4,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Node.js",
  //     id: 2,
  //     parts: [
  //       {
  //         name: "Routing",
  //         exercises: 3,
  //         id: 1,
  //       },
  //       {
  //         name: "Middlewares",
  //         exercises: 7,
  //         id: 2,
  //       },
  //     ],
  //   },
  // ];

  // return (
  //   <div>
  //     {courses.map((courses) => (
  //       <Course course={courses} />
  //     ))}
  //   </div>
  // );
};

export default App;
