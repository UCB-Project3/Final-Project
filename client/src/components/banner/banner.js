import React from "react";
import pic from "../../img/Welcome.jpg"
import './banner.css'

const Banner = () => (


    <section className="front-page-section">
        <div className="front-page">
            <div id="bannerContainer">
                <div class="welcome-premium-banner welcome-premium-banner--get-premium">
                    <div class="welcome-premium-banner__header welcome-premium-banner__header--inverted">Search any wine and buy in seconds</div>
                    <img src={pic} alt="picture" />;
                    <Image source={require('../../img/Welcome.jpg')} />
                </div>
            </div>
        </div>
    </section>

);
export default Banner;






