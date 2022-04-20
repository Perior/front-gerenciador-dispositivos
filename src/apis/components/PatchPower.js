import axios from "../manager";

const PatchPower = async (setData, pathName) => {
    try {
        const response = await axios.patch(`${pathName}:ligar_desligar`);
        setData(response.data);
    }
    catch (e) {
        console.log(e);
    }
}

export default PatchPower;