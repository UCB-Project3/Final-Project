import React from "react";
import pic from "../../img/Welcomepic.jpg"
import './Banner.css'

const Banner = () => (


    <section className="front-page-section">
        <div className="front-page">
            <div id="bannerContainer">
                <div class="welcome-premium-banner welcome-premium-banner--get-premium">
                    <div class="welcome-premium-banner__header welcome-premium-banner__header--inverted">Search any wine and buy in seconds</div>
                    <img src={require('../../img/Welcomepic.jpg')} />
                </div>
            </div>
        </div>
    </section>

);
export default Banner;
