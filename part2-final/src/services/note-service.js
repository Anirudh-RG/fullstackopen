import axios from "axios";

const baseUrl = "http://localhost:3001/notes"

const getAll = async() =>{
    const req = await axios.get(baseUrl);
    return req.then(res => res.data);
}

const create = newObject =>{
    const req = axios.post(baseUrl,newObject);
    return req.then(req => req.data);

}
const update = newObject => {
    const req = axios.put(baseUrl,newObject);
    return req.then(res => res.data);
}
export default {
    getAll: getAll,
    create: create,
    update: update
}
