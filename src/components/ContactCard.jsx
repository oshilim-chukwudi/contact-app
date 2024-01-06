// ContactCard.jsx
import React from 'react';
import userImage from "../components/images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div className='item' key={id}>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <img src={userImage} alt={`User ${name}`} />
            <i className='trash alternate outline icon' style={{ color: "red", marginTop: "7px" }} onClick={()=> props.clickHandler(id)}></i>
        </div>
    );
}

export default ContactCard;
