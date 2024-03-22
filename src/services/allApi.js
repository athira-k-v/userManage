import { commonApi } from "./commonApi"
import SERVER_URL from "./serverUrl"


//register Api

export const registerAPI =async(user)=>{
  return  await commonApi("POST",`${SERVER_URL}/register` ,user,"")
}


//login Api

export const loginAPI =async(user)=>{
  return  await commonApi("POST",`${SERVER_URL}/login` ,user,"")
}


 //get student details
 export const  getUserDetailsAPI =async()=>{
    return  await commonApi("GET",`${SERVER_URL}/get-user-details`,"","")
  }


  //project/edit

export const  updateUserAPI =async(userId,reqBody,reqHeader)=>{
    return  await commonApi("PUT",`${SERVER_URL}/user/edit/${userId}`,reqBody,reqHeader)
  }
  
  
  //project/delete
  
  export const  deleteUserAPI =async(userId,reqHeader)=>{
    return  await commonApi("DELETE",`${SERVER_URL}/remove-user/${userId}`,{},reqHeader)
  }
  