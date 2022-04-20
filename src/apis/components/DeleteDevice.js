import axios from "../manager";

const DeleteDevice = async (pathName, id) => {
    try {
        const response = await axios.delete(`${pathName}/${id}`)
        console.log(response.data)
        
    }
    catch (e) {
        console.log(e);
    }
}

export default DeleteDevice;