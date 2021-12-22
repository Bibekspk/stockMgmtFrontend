import axios from 'axios';

let BASE_URL= process.env.REACT_APP_BASE_URL;

let http = axios.create({
    baseURL:BASE_URL,
    responseType: 'json',
    timeout: 10000,
    timeoutErrorMessage: "Server timed out"
})

let getHeaders=(isSecured)=>{
    let options={
        'Content-type': 'application/json'
    }
    if(isSecured){
        options['Authorization'] = JSON.parse(localStorage.getItem('token'));
    }
    return options
}

let GET = (url,params={},isSecured=false)=>(
  http.get(url,{
     headers: getHeaders(isSecured),
     params
  })
)

let POST = (url,data={},params={},isSecured=false)=>(
    http.post(url,data,{
       headers: getHeaders(isSecured),
        params
    })
)

export const HttpCLient={
    GET,POST
}