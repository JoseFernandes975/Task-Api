import axios from "axios";

export function findByUser(name: string){
    return axios.get(`https://api.github.com/users/${name}`);
}