import axios from "axios";

const getALl = () =>{
    const res = axios.get("http://localhost:3001/phonebook")
    .then((res)=>{
        return res.data;
    })
}

const put = () =>{
    const res = axios.get("http://localhost:3001/phonebook")
    .then((res)=>{
        return res.data;
    })
}

const patch = ({content,id}) =>{
    const res = axios.get("http://localhost:3001/phonebook")
    .then((res)=>{
        return res.data;
    })
}

export default {getAll,put,patch}