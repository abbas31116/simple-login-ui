import axios from "axios";

const api = axios.create({
  baseURL: "https://dpaint.liara.run/api/v1/",
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
