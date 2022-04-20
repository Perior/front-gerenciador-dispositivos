import { Link } from 'react-router-dom';
import remote_control from '../assets/remote_control.png';

const Head = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Link to="/" className='home-button'>
                        <img src={remote_control} className="App-logo" alt="Logo home"/>
                    </Link>
                    <p>
                        Watch &amp; Chill
                    </p>
                </header>
            </div>
        </>
    );
}

export default Head;