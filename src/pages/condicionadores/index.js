import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDevice from "../../apis/components/GetDevice";
import PatchControl from "../../apis/components/PatchControl";
import PatchPower from "../../apis/components/PatchPower";
import Head from "../../elements/headBar";
import PowerSvg from "../../assets/powerbttn.svg";
import TemperatureUpSvg from "../../assets/tempup.svg";
import TemperatureDownSvg from "../../assets/tempdown.svg";
import PutPopUp from "../../elements/putPopUp";
import Modal from "../devices/modal";


const Condicionador = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalElement, setModalElement] = useState();
    let { id } = useParams();
    const pathName = `/condicionadores/${id}`;

    useEffect(() => {
        GetDevice(setData, pathName);
    }, [pathName]);

    const closeModal = () => {
        setIsOpen(false);
    }

    function submitCallback() { GetDevice(setData, pathName); }

    const openPutModal = () => {
        setModalElement(<PutPopUp
            baseRoute={pathName}
            handleClose={closeModal}
            handleSubmitCallback={() => submitCallback()}
        />)
        setIsOpen(true);
    }

    return (
        <>
            <Head />

            {isOpen && <Modal>
                {modalElement}
            </Modal>}

            <div className="ac-controller">

                <ul className="ac-display">
                    <li key={data.id} className="devices-list">

                        <div className="device-link">
                            <p>{data.power ? 'Ligado' : 'Desligado'}</p>
                            <p>Modelo: {data.modelo}</p>
                            <p>Temperatura: {data.temperatura}</p>
                        </div>

                        <div className="list-bttn-container">
                            <button className="list-bttn"
                                onClick={() => openPutModal()}>
                                Edit
                            </button>
                        </div>

                    </li>
                </ul>

                <div className="remote-control">
                    <h2>AC Control</h2>
                    <section>
                        <button
                            className="control-button"
                            onClick={() => PatchPower(setData, pathName)}>
                            <img src={PowerSvg} alt="Power button" />
                            Power
                        </button>
                    </section>

                    <section className="volume-buttons">
                        <button
                            className="control-button"
                            onClick={() => PatchControl(setData, pathName, `controlar_temperatura`, 'true')}>
                            <img src={TemperatureUpSvg} alt="Temperature Up button" />
                            Temperature Up
                        </button>
                        <button
                            className="control-button"
                            onClick={() => PatchControl(setData, pathName, `controlar_temperatura`, 'false')}>
                            <img src={TemperatureDownSvg} alt="Temperature Down button" />
                            Temperature Down
                        </button>
                    </section>

                </div>

            </div>
        </>
    );
}

export default Condicionador;