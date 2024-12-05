import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const CreateUser = () => {
  const { addUser, updateUser, editingUser, cancelEditing } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    profession: '',
    gender: '',
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        firstname: '',
        lastname: '',
        age: '',
        profession: '',
        gender: '',
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, profession, gender } = formData;

    if (firstname && lastname && age && profession && gender) {
      if (editingUser) {
        updateUser(editingUser.id, formData);
        alert('User updated successfully!');
      } else {
        addUser({ id: Date.now(), ...formData });
        alert('User created successfully!');
      }
      setFormData({ firstname: '', lastname: '', age: '', profession: '', gender: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {editingUser ? 'Edit User' : 'Create User'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            {editingUser ? 'Update User' : 'Create User'}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={cancelEditing}
              className="bg-gray-500 text-white px-4 py-2"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
