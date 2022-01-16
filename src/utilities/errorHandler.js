import { toast } from "react-toastify";

export const errorHandler = (error)=>{
    debugger;
    let errorMsg;
    if(typeof(error) ==="object"){
        let errorBody = error.response.data.msg 
        if(errorBody.message){
            errorMsg = errorBody.message
        }
        else{
            errorMsg = errorBody
        }
    }
    return errorMsg;
}

export const Toaster = (error)=>{
   return toast.error(error)
}