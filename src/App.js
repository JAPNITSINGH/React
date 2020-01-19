import React from 'react';
import logo from './logo.svg';
import './App.css';
import  ButtonAppBar  from "./components/app-bar";
import  UserList  from "./components/userlist";
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
const users=[
  {
    name : "name1",
    age : 10
  },
  {
    name : "name2",
    age : 20
  }
]
function App() {
  return (
   <div>
       <ButtonAppBar/>
       <Container>
         <UserList users = {users}/>
       </Container>
       <Button variant="contained" color="secondary">
        Add User
      </Button>
      <input type="text" name="Name:"/>
      <input type="number" name="Age:"/>

   </div>
  
  );
}

export default App;
