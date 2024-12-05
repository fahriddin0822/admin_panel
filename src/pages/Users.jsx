import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { users, deleteUser, startEditingUser } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, userId: null });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setModal({ show: true, userId: id });
  };

  const confirmDelete = () => {
    deleteUser(modal.userId);
    setModal({ show: false, userId: null });
    alert('User deleted successfully!');
  };

  const handleEdit = (user) => {
    startEditingUser(user); 
    navigate('/create'); 
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.id} className="border p-4 flex justify-between items-center">
            <div>
              <p>Name: {user.firstname}</p>
              <p>Last name: {user.lastname}</p>
              <p>Age: {user.age}</p>
              <p>Profession: {user.profession}</p>
              <p>Gender: {user.gender}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-500 text-white px-4 py-2 mx-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Deleting User */}
      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <p className="text-lg font-bold">You are deleting this user!</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setModal({ show: false, userId: null })}
                className="bg-gray-500 text-white px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
