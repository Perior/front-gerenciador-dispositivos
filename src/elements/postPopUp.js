import { useEffect, useState } from "react";
import GetDevice from "../apis/components/GetDevice";
import PostDevice from "../apis/components/PostDevice";


const PostPopUp = ({ baseRoute, handleClose, handleSubmitCallback }) => {
    const [marcas, setMarcas] = useState([]);
    const [power, setPower] = useState(false);
    const [modelo, setModelo] = useState('');
    const [totalCanal, setTotalCanal] = useState('');

    useEffect(() => {
        GetDevice(setMarcas, `/marcas`);

    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const post = { power: power, modelo: modelo, totalCanal: totalCanal }
            await PostDevice(`/${baseRoute}`, JSON.stringify(post));
            handleSubmitCallback();
        }
        catch (e) {
            console.log(e);
        }

        handleClose();
    };

    const handleChange = () => {
        setPower(!power);
    };

    return (
        <>

            <h2>Create a new device</h2>

            <form className="popup-form" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="power">Power: </label>
                    <input className="power-checkbox" id="power" type={"checkbox"} checked={power} onChange={handleChange} />
                </div>

                <div>
                    <select onChange={(e) => setModelo(e.target.value)} required>
                        <option value="">--Choose the trademark--</option>
                        {marcas.map((res, index) => {
                            return (
                                <option key={`marcas-element-${index}`} value={index}>{res}</option>
                            )
                        })}
                    </select>
                </div>

                {baseRoute === 'televisores' &&
                    <div>
                        <label htmlFor="total-channel">Channel quantity: </label>
                        <input id="total-channel" type={"number"} onChange={(e) => setTotalCanal(e.target.value)} />
                    </div>}

                <button className="popup-button" type="submit">Create</button>
            </form>

            <button className="close-popup" onClick={handleClose}>x</button>
        </>
    );
}

export default PostPopUp;