import axios from "axios";
import { error } from "console";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// api.interceptors.request.use((conf)=>{
//   console.log(conf)
//   conf.headers.Authorization='abbas'
//   return conf
// })

// api.interceptors.response.use((res)=> res,
//                            (error)=>{
//  if (error.response?.status==404){
//  console.log('not found')}
//}
//)

export { api };
