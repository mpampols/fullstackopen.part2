import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange} />
          phone: <input value={newPhone} onChange={handlePersonPhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
