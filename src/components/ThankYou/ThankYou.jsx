import React, { useState } from "react";
import { useHistory }      from "react-router-dom";
import "./ThankYou.css";

const Cancel = () => {
    const [email, setEmail] = useState( "" );
    const history           = useHistory();

    const inputChange = ( key, value ) => {
        setEmail( { ...email, [key]: value } )
    };

    const submitForm = clk => {
        clk.preventDefault(); // prevent browser defaults on form submit
        history.push( "/" );
    };

    return (
        <aside className="thank-you-container">
            <h2>
            {/* Placeholder */}
            </h2>
            <form
                name="completed donation : added email"
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
                <button type="submit">Welcome to Our Journey!</button>
            </form>
        </aside>
    );
};

export default Cancel;