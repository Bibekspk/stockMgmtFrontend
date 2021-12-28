export const errorHandler = (error)=>{
    debugger;
    let errorMsg;
    if(error.response.data.msg){
        let errorBody = error.response.data.msg 
        if(errorBody.message){
            errorMsg = errorBody.message
        }
        else{
            errorMsg = errorBody
        }
    }
    return errorMsg
}