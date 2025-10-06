import axios from "../axios";

// đặt URL API của backend
export const createUser=(data)=>{
  return axios.post("/api/users",data)
}