import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./Header.jsx";
import AddContact from './AddContact.jsx';
import ContactList from "./ContactList.jsx";



function App() {
 const Local_STORAGE_KEY = "contacts"
const [contacts, setcontacts]=useState([])
  
const addcontactHandler = (contact)=>{
  console.log(contact);
  setcontacts([...contacts,contact]);
};



useEffect(()=>{
  const retriveContacts = JSON.parse(localStorage.getItem(Local_STORAGE_KEY));
  if (retriveContacts) setcontacts(retriveContacts);
},[]);


useEffect(()=>{
  localStorage.setItem(Local_STORAGE_KEY, JSON.stringify(contacts));
},[contacts]);


  return (
    <div className="ui container">
      <Header />
      <AddContact addcontactHandler={addcontactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
