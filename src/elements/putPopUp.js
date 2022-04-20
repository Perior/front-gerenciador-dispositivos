import { useEffect, useState } from "react";
import GetDevice from "../apis/components/GetDevice";
import PutDevice from "../apis/components/PutDevice";


const PutPopUp = ({ baseRoute, handleClose, handleSubmitCallback }) => {
    const [marcas, setMarcas] = useState([]);
    const [power, setPower] = useState(false);
    const [modelo, setModelo] = useState('');
    const [totalCanal, setTotalCanal] = useState('');
    const [canal, setCanal] = useState('');

    useEffect(() => {
        GetDevice(setMarcas, `/marcas`);

    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const put = { power: power, modelo: modelo, totalCanal: totalCanal, canal: canal }
            await PutDevice(baseRoute, JSON.stringify(put));
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

                {baseRoute.includes('televisores') &&
                    <div>
                        <label htmlFor="total-channel">Channel quantity: </label>
                        <input id="total-channel" type={"number"} onChange={(e) => setTotalCanal(e.target.value)} />

                        <label htmlFor="current-channel">Current Channel: </label>
                        <input id="current-channel" type={"number"} onChange={(e) => setCanal(e.target.value)} />
                    </div>}

                <button className="popup-button" type="submit">Create</button>
            </form>

            <button className="close-popup" onClick={handleClose}>x</button>
        </>
    );
}

export default PutPopUp;