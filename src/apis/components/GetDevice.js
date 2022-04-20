import axios from "../manager";

const GetDevice = async (setData, pathName) => {
    try {
        const response = await axios.get(pathName);
        console.log(response.data)
        setData(response.data);
    }
    catch (e) {
        console.log(e);
    }
}

export default GetDevice;