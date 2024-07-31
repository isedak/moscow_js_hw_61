import React from "react";
import { NavLink } from "react-router-dom";
import './Page.css'

const Page = () => {
    return (
        <div className="background-page flex-row-stretch">
            <div className="page-flex-column">
                <h1 className="page-title">Page One</h1>
                <div className="page-white-column">
                    <p className="page-bold-upper-text">Lorem ipsum dolor</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita molestias sint odio ullam debitis, officiis dignissimos commodi quam tempora dolor praesentium repellendus natus nulla delectus possimus perspiciatis, fuga dolores?</p>
                </div>
                <div className="page-flex-row">
                    <NavLink className="page-white-link" to={'/'}>
                        {'<- Home'}
                    </NavLink>
                    <NavLink className="page-white-link" to={'/gallery'}>
                        {'Photo Gallery ->'}
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Page;