import React, { useState } from "react";
import PropTypes from 'prop-types'

import '../Css/Adduser.css';
const initialUser = {
  firstName: "",
  lastName: "",
  age: 0,
  visits: 0,
  status: "Pending",
  progress: 0,
  subRows: undefined,
};

const AddUserDialog = props => {
  const [user, setUser] = useState(initialUser);
  const { addUserHandler } = props;

  const handleAdd = (event) => {
    event.preventDefault();
    addUserHandler(user);
    setUser(initialUser);
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setUser({ ...user, [name]: value });
      
    };

  return (
    <div>
      <form>
        <label className="Label">Name:</label>
        <input
          autoFocus
          margin="dense"
          placeholder="Name"
          label="First Name"
          type="text"
          fullWidth
          value={user.firstName}
          onChange={handleChange("firstName")}
        />
        <br />
        <label className="Label">Surname:</label>
        <input
          margin="dense"
          placeholder="Surname"
          label="Last Name"
          type="text"
          fullWidth
          value={user.lastName}
          onChange={handleChange("lastName")}
        />
        <br />
        <label className="Label">PPK sum:</label>
        <input
           margin="dense"
           label="Age"
           type="number"
           fullWidth
           value={user.age}
           onChange={handleChange('age')}
        />
        <br />
        <label className="Label">Order sum:</label>
        <input
           margin="dense"
           label="Visits"
           type="number"
           fullWidth
           value={user.visits}
           onChange={handleChange('visits')}
        />
        <br />
        <label className="Label">PPK:</label>
        <input
          margin="dense"
          label="Status"
          type="text"
          fullWidth
          value={user.status}
          onChange={handleChange('status')}
        /><br />
        <label className="Label">Order quantity</label>
        <input
          margin="dense"
          label="Profile Progress"
          type="number"
          fullWidth
          value={user.progress}
          onChange={handleChange('progress')}
        />
        <button className="Label" onClick={handleAdd}>Add new</button>
      </form>
    </div>
  );
};

AddUserDialog.propTypes = {
    addUserHandler: PropTypes.func.isRequired,
  }
export default AddUserDialog;
