import { useEffect, useState } from 'react';
import { Link/*, useNavigate*/ } from 'react-router-dom';
import GetDevice from '../../apis/components/GetDevice';
import ConfirmationPopup from '../../elements/deletePopup';
import Head from '../../elements/headBar';
import PostPopUp from '../../elements/postPopUp';
import Modal from './modal';


export default function Devices({ baseRoute, titleName, propertiesToBeListed }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [modalElement, setModalElement] = useState();

    //const navigate = useNavigate();

    useEffect(() => {
        GetDevice(setData, `/${baseRoute}`);

    }, [baseRoute]);

    const closeModal = () => {
        setIsOpen(false);
    }

    function submitCallback() { GetDevice(setData, `/${baseRoute}`); }

    const openPostModal = () => {
        setModalElement(<PostPopUp
            baseRoute={baseRoute}
            handleClose={closeModal}
            handleSubmitCallback={() => submitCallback()}
        />)
        setIsOpen(true);
    }

    const openDeleteModal = (id) => {
        setModalElement(<ConfirmationPopup 
            pathName={`/${baseRoute}`}
            id={id}
            closeModal={closeModal}
            handleDeleteCallBack={() => submitCallback()}

        />)
        setIsOpen(true);
    }

    return (
        <>
            <Head />

            <div className='list-container'>
                <h2>{titleName} List</h2>

                <form role="search" method="get">
                    <input type="search" id="search-device"
                        placeholder="Search for device..."
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />

                    {/* <button className="search-button" type="button" onClick={(e) => navigate(`/${baseRoute}/${searchTerm}`)}>Search</button> */}
                </form>

                <button className='add-button'
                    onClick={() => openPostModal()}>Add</button>

                {isOpen && <Modal>
                    {modalElement}
                </Modal>}

                <ul>
                    {data.length === 0 && <li><p>No items to display</p></li>}
                    {data.filter((res) => {
                        if (res.id.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return res;
                        } else {
                            return null;
                        }
                    }).map((res) => {
                        return (
                            <li key={res.id} className='devices-list'>

                                <Link to={res.id} className="device-link">

                                    <p>{res.device.power ? 'Ligado' : 'Desligado'}</p>
                                    {propertiesToBeListed.map((property, index) =>
                                    (
                                        <p key={`property-element-${index}`}>
                                            {Object.values(property)[0]}: {res.device[Object.keys(property)[0]]}
                                        </p>
                                    ))}

                                </Link>

                                <div className="list-bttn-container">
                                    <button className="list-bttn" 
                                            onClick={() => openDeleteModal(res.id)}>x</button>
                                </div>

                            </li>
                        )
                    })}
                </ul>

            </div>
        </>
    );
}