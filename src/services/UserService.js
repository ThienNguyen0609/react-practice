import axios from "axios";

const fecthAllUser = () => {
    return axios.get("http://reqres.in/api/users?page=1");
}

export {fecthAllUser};