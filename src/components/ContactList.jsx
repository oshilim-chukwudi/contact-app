// ContactList.jsx
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
     console.log(props);

    const deletecontactHandler = (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deletecontactHandler} />

    });

    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
}

export default ContactList;
