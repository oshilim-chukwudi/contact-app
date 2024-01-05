// ContactList.jsx
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
    ));

    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
}

export default ContactList;
