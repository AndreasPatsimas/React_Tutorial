import React, { Component } from 'react';
import Contact from "./Contact";

class Contacts extends Component {
    
    state = {
        contacts: [
            {
                id: 1,
                name: "Andreas Patsimas",
                email: "andreas-patsim@hotmail.com",
                phone: "698******9"
            },
            {
                id: 2,
                name: "Sotiris Patsimas",
                email: "sotirinio@hotmail.com",
                phone: "698******1"
            },
            {
                id: 3,
                name: "Chris Bolosis",
                email: "bolosis@hotmail.com",
                phone: "698******7"
            }
        ]
    }

    deleteContact = (id) => {
        
        const {contacts} = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        });
    }
    
    render() {

        const {contacts} = this.state;

        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key = {contact.id}
                        contact = {contact} deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;