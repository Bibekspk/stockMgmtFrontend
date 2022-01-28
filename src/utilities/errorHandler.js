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

export const ErrorToaster = (error)=>{
   return toast.error(error)
}

export const InfoToaster = (info)=>{
    return toast.info(info);
}

export const SuccessToaster = (success)=>{
    return toast.success(success);
}