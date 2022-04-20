import axios from "../manager";

const PatchControl = async (setData, pathName, property, value) => {
    try {
        const response = await axios.patch(`${pathName}:${property}`, value);
        setData(response.data);
    }
    catch (e) {
        console.log(e);
    }
}

export default PatchControl;