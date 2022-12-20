
export const isLoggedIn=()=>{
    let data=localStorage.getItem("LoginToken");
    if(data==null)
    {
        return false;
    }
    else {
        return true;
    }
}

export const doLogin =(data,next)=>{
     localStorage.setItem("SignUp",(data))
     next()
}



// export const getCurrentUserDetail =()=>{
//         if(isLoggedIn){
//             return JSON.parse(localStorage.getItem("SignUp"));
//         }
//         else{
//             return false;
//         }
// }

// export const getToken = ()=>{
//     if(isLoggedIn()){
//         return JSON.parse(localStorage.getItem("SignUp"))
//     }else{
//         return null;
//     }
// }
