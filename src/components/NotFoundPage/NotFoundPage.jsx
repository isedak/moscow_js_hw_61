import React from "react";
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-background flex-row">
            <div className="flex-column">
                <h1 className="title">404</h1>
                <p className="text">Not Found</p>
            </div>
        </div>
    )
};

export default NotFoundPage;