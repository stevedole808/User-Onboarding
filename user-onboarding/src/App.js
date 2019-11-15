import React, { useState } from 'react';
import List from './components/List';
// import MemberForm from './components/MemberForm';
import './App.css';

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Lyndsi",
      email: "kcatgirl@gmail.com",
      role: "Damage"
    }
  ]);

  const addNewList = list => {
    const newList = {
      id: Date.now(),
      name: list.name,
      email: list.email,
      role: list.role
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="App">
      <List addNewList={addNewList} />
      {/* <List lists={lists} /> */}
    </div>
  );
}

export default App;