/**
 * Remember your why
 **/

import React from "react";

// Import stylesheet
import "./GetInvolved.css";

function GetInvolved () {
    return (
        <section>
            {/* Start of code from PayPal */}
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input
                    type="hidden"
                    name="hosted_button_id"
                    value="BNRCUAW3W85T4"
                />
                <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                />
                <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                    width="1"
                    height="1"
                />
            </form>
            {/* End of code from PayPal */}
        </section>
    );
}

export default GetInvolved;