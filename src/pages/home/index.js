import React from "react";
import ac from '../../assets/ac.png';
import tv from '../../assets/tv.png';
import { Link } from "react-router-dom";
import Head from "../../elements/headBar";

const Home = () => {
    return (
        <>
        <Head />
            <body>
                <div className="device-container">
                    <div className="device-type">
                        <Link to="/condicionadores">
                            <img src={ac} alt="Icon of an air conditioner" className="device-img" />
                            Ares-Condicionados
                        </Link>
                    </div>
                    <div className="device-type">
                        <Link to="/televisores">
                            <img src={tv} alt="Icon of a tv" className="device-img" />
                            Televisores
                        </Link>
                    </div>
                </div>
            </body>

        </>
    );
}

export default Home;