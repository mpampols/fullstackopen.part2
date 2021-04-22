import React from "react";

const Persons = ({ persons, filterString }) => {
  const filteredElements = persons
    .filter((person) => person.name.includes(filterString))
    .map((person) => (
      <div key={person.name}>{person.name} {person.phone}</div>
    ));

  return (
    <div>
      {filteredElements}
    </div>
  );
};

export default Persons;
