import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const galleryHandle = () => {
        navigate({ pathname: '/gallery' })
    };

    const contactHandle = () => {
        navigate({ pathname: '/contacts' })
    };

    const pageHandle = () => {
        navigate({ pathname: '/page' })
    };

    return (
        <div className="background flex-row">
            <div className="flex-column">
                <h1 className="title">Moscow</h1>
                <div className="black-column">
                    <Button
                        buttonClasses={['btn-custom']}
                        label={"Page One"}
                        click={pageHandle}
                    />
                    <Button
                        buttonClasses={['btn-custom']}
                        label={"Photo gallery"}
                        click={galleryHandle}
                    />
                    <Button
                        buttonClasses={['btn-custom']}
                        label={"Contacts"}
                        click={contactHandle}
                    />
                </div>
            </div>
        </div>
    )
};

export default HomePage;