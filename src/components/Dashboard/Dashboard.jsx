// src/components/Dashboard/Dashboard.jsx

import { useEffect, useContext ,useState} from 'react';

import { UserContext } from '../../contexts/UserContext';

import * as userService from '../../services/userService';

const Dashboard = () => {
    const { user } = useContext(UserContext);
  const [listOfUsers,setListUsers] = useState([]);
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const fetchedUsers = await userService.index();
          setListUsers(fetchedUsers);
        } catch (err) {
          console.log(err)
        }
      }
      if (user) fetchUsers();
    }, [user]);
  
    return (
      <main>
        <h1>Welcome, {user.username}</h1>
        <h2>Users</h2>
        <ul>
          {listOfUsers.map((user) => (
            <h4 key={user._id}>{user.username}</h4>
          ))}
          </ul>
      </main>
    );
  };

export default Dashboard;

