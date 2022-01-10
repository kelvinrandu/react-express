import logo from './logo.svg';
import './App.css';
import Users from './components/users/users';
import React,{useState,useEffect} from 'react';

function App() {
  const [users,setUsers] = useState([])
  
    useEffect(() => {
      getUsers();
      console.log(users);
    }, []);

    async function getUsers() {
      const response = await fetch("/api/users" ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    });
      const users = await response.json();
      setUsers(users);
    }
    
  return (
    <div className="App">
      <Users/>
      {users}

    </div>
  );
}

export default App;
