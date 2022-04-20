import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetDevice from "../../apis/components/GetDevice";
import PatchControl from "../../apis/components/PatchControl";
import PatchPower from "../../apis/components/PatchPower";
import Head from "../../elements/headBar";
import PowerSvg from "../../assets/powerbttn.svg";
import VolumeUpSvg from "../../assets/volup.svg";
import VolumeDownSvg from "../../assets/voldown.svg";
import ChannelUpSvg from "../../assets/tempup.svg";
import ChannelDownSvg from "../../assets/tempdown.svg";
import PutPopUp from "../../elements/putPopUp";
import Modal from "../devices/modal";

const Televisor = () => {
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [modalElement, setModalElement] = useState();
    let { id } = useParams();
    const pathName = `/televisores/${id}`;

    useEffect(() => {
        GetDevice(setData, pathName);
    }, [pathName]);

    const getChannel = () => {
        return document.getElementById("channel-tuner").value;
    }

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
                            <p>Canal: {data.canal} de {data.totalCanal}</p>
                            <p>Volume: {data.volume}</p>
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

                    <h2>TV Control</h2>

                    <section>
                        <button
                            className="control-button"
                            onClick={() => PatchPower(setData, pathName)}>
                            <img src={PowerSvg} alt="Power button" />
                            Power
                        </button>
                    </section>

                    <div className="controllers-section-display">

                        <section className="channel-buttons">

                            <button
                                className="control-button"
                                onClick={() => PatchControl(setData, pathName, `controlar_canal`, 'true')}>
                                <img src={ChannelUpSvg} alt="Channel Up button" />
                                Channel +
                            </button>
                            <button className="control-button"
                                onClick={() => PatchControl(setData, pathName, `controlar_canal`, 'false')}>
                                <img src={ChannelDownSvg} alt="Channel Down button" />
                                Channel -
                            </button>

                        </section>

                        <section className="volume-buttons">
                            <button
                                className="control-button"
                                onClick={() => PatchControl(setData, pathName, `controlar_volume`, 'true')}>
                                <img src={VolumeUpSvg} alt="Volume Up button" />
                                Volume Up
                            </button>
                            <button
                                className="control-button"
                                onClick={() => PatchControl(setData, pathName, `controlar_volume`, 'false')}>
                                <img src={VolumeDownSvg} alt="Volume Down button" />
                                Volume Down
                            </button>
                        </section>

                    </div>

                    <div className="controllers-section-display">
                        <label htmlFor="channel-tuner" className="hidden-label">Digit a channel</label>
                        <input className="channel-tuner" id="channel-tuner" type={"number"} placeholder="Change Channel" />
                        <button className="submit-channel" onClick={() => PatchControl(setData, pathName, `mudar_canal`, getChannel())}>

                        </button>
                    </div>

                </div>

            </div>
        </>
    );

}

export default Televisor;