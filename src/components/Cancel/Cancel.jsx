import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Cancel.css";

const Cancel = () => {
    const [email, setEmail] = useState( "" );
    const history           = useHistory();

    const inputChange = ( key, value ) => {
        setEmail( { ...email, [key]: value } )
    };

    const submitForm = clk => {
        clk.preventDefault(); // prevent browser defaults on form submit
        history.push( "/welcome" );
    };

    return (
        <aside className="cancel-container">
            <h2>
                We would still love for you to join our e-mail list to get updates and play the game when it's released!
            </h2>
            <form
                name="cancel donation : added email"
                onSubmit={submitForm}
                netlify
            >
                <label>Enter e-mail
                    <input
                        type="text"
                        name="email"
                        minLength="9"
                        onChange={inputChange}
                    />
                </label>
                <button type="submit">Join Our Journey!</button>
            </form>
        </aside>
    );
};

export default Cancel;
