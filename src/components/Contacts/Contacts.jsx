import React from "react";
import { NavLink } from "react-router-dom";
import './Contacts.css'

const Contacts = () => {
    return (
        <div className="background-contacts flex-row-stretch">
            <div className="contacts-flex-column">
                <NavLink className="contacts-white-link" to={'/gallery'}>
                    {'<- Photo Gallery'}
                </NavLink>
                <h1 className="contacts-title">Contacts</h1>
                <div className="white-column">
                    <p className="bold-upper-text">Lorem ipsum dolor</p>
                    <div className="link-row">
                        <div className="phone-icon"></div>
                        <a href="tel:855254254254" className="contacts-link">(+55) 254. 254. 254</a>
                    </div>
                    <div className="link-row">
                        <div className="mail-icon"></div>
                        <a href="mailto:mail@mailmailmail.ru"
                            className="contacts-link">mail@mailmailmail.ru</a>
                    </div>
                    <div className="link-row">
                        <div className="location-icon"></div>
                        <a href="http://maps.google.com/?q=17Petrovka,Moscow,Russia"
                            className="contacts-link">
                            17, Petrovka, Moscow, Russia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;