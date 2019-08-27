// components js files with capital the first letter
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context'
//import "./contact.css";


class Contact extends Component {
    
    // constructor(){ 

    //     super();

    //     this.state = {};

    //     this.onShowClick = this.onShowClick.bind(this); instead of state i can put an arrow function
    // }

    // static propTypes = {
        
    //     contact: PropTypes.object.isRequired
        
        
    // }

    state = {
        showContactInfo: false
    };
    
    onShowClick = (e) => {
        this.setState(
            {
                showContactInfo: !this.state.showContactInfo
            }
        );
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: "DELETE_CONTACT", payload: id
        });
    }

    render() {

        const {id, name, email, phone} = this.props.contact;

        const {showContactInfo} = this.state;

        return (

            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                        <div className = "card card-body mb-3">
                        <h4>{name} <i onClick={this.onShowClick} className = "fas fa-sort-down" style = {{cursor: "pointer"}}/> <i className="fa fa-times" style = {{cursor: "pointer", 
                    float: "right", color: "red"}} onClick = {this.onDeleteClick.bind(this, id, dispatch)} aria-hidden="true"></i> </h4>  
                        {showContactInfo ? (<ul className = "list-group">
                            <li className = "list-group-item">{email}</li>
                            <li className = "list-group-item">{phone}</li>
                        </ul>) : null}
                        
                    </div>
                    );
                }}
            </Consumer>

           
        );
    }
}

Contact.propTypes = {
        
    contact: PropTypes.object.isRequired
    
}

// onShowClick = (name, email, e) => { this outside and abobe render
//     console.log(name, email);
// }
// onClick={this.onShowClick.bind(this,  name, email)} --> for bind from a form data e.g or on click, inside icon in this example


// style = {{color: "red"}} for inline style

// Contact.propTypes = {  or abobe render
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// };

export default Contact;
