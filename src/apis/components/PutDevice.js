import axios from "../manager";

const PutDevice = async (pathName, value) => {
    try {
        const response = await axios.put(`${pathName}`, value);
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}

export default PutDevice;