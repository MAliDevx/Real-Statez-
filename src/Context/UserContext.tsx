import React, { createContext, useState } from 'react';
import API from '../api/axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchAllPropertise = async () => {
    const res = await API.get('/property/view-properties');
  const propertyArray = res.data.data || []; // ← fix here
  setUsers(propertyArray);
  return propertyArray;
  };

  const getUserById = async (id) => {
    const res = await API.get(`/users/${id}`);
    return res.data;
  };

  const createUser = async (userData) => {
    const res = await API.post('/users', userData);
    return res.data;
  };

  const updateUser = async (id, userData) => {
    const res = await API.put(`/users/${id}`, userData);
    return res.data;
  };

  const deleteUser = async (id) => {
    const res = await API.delete(`/users/${id}`);
    return res.data;
  };

  return (
    <UserContext.Provider value={{
      fetchAllPropertise,
      getUserById,
      createUser,
      updateUser,
      deleteUser,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => React.useContext(UserContext);

export default UserProvider;
