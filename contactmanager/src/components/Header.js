import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    const {branding} = props;

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3  py-0">
            <div className = "container">
                <a href = "#" className = "navbar-brand">{branding}</a>
                <div>
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
};


//style = {headingStyle} 
// const headingStyle = {
//     color: "green",
//     fontSize: "50px"
// }

export default Header;