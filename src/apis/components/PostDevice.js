import axios from "../manager";

const PostDevice = async (pathName, post) => {
    try {
        const response = await axios.post(pathName, post);
        console.log(response.data)
        
    }
    catch (e) {
        console.log(e);
    }
}

export default PostDevice;