import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import AddContact from './AddContact.jsx';
import ContactList from "./ContactList.jsx";


function App() {

  const contacts = [
    {
      id:1,
      "name":"Chuks",
      "email":"chuks@gmail.com"

    },
    {
      id:2,
      "name":"Zazi",
      "email":"Zazi@gmail.com"

    }

  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
