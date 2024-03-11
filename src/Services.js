import axios from "axios";
import { useParams } from "react-router-dom";

const url = 'http://localhost:3000/users';

export const fetchData = async () =>{
    try{
        const {data} = await axios.get(url);
        console.log(data)
        return data;
    } catch(err){
        console.log(err);
    }
}