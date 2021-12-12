import axios from 'axios';

let BASE_URL= process.env.REACT_APP_BASE_URL;

let http = axios.create({
    baseURL:BASE_URL,
    timeout: 10000,
    responseType: 'json',
    timeoutErrorMessage: "Server timed out"
})

let GET = (url,params={},isSecured=false)=>(
  http.get(url,{
      params
  })
)

let POST = (url,data={},params={},isSecured=false)=>(
    http.post(url,data,{
        params
    })
)

export const HttpCLient={
    GET,POST
}