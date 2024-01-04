import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import AddContact from './AddContact.jsx';
import ContactList from "./ContactList.jsx";


function App() {
  return (
    <>
      <Header />
      <AddContact />
      <ContactList />
    </>
  );
}

export default App;
