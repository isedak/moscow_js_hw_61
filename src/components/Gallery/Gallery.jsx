import React from "react";
import { NavLink } from "react-router-dom";
import MySlider from "../MySlider/MySlider";
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="background-gallery gallery-flex-column">
            <MySlider />
            <div className="gallery-flex-row">
                <NavLink className="gallery-white-link" to={'/page'}>
                    {'<- Page One'}
                </NavLink>
                <NavLink className="gallery-white-link" to={'/contacts'}>
                    {'Contacts ->'}
                </NavLink>
            </div>
        </div>
    )
};

export default Gallery;