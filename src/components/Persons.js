import React from "react";

const Persons = ({ name, phone }) => {
  const filteredElements = persons
    .filter((person) => person.name.includes(filterString))
    .map((person) => (
      <Persons key={person.key} name={person.name} phone={person.phone} />
    ));

  return (
    <div>
      {name} {phone}
    </div>
  );
};

export default Persons;
