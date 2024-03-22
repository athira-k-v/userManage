import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { deleteUserAPI, getUserDetailsAPI } from '../services/allApi';
import Edit from '../Components/Edit';
// import TableView from '../Components/TableView';



function View({users}) {

// const [allDetails,setAllDetails]=useState([])












// const getStudentDetails = async () => {
//     try {
//       const result = await getUserDetailsAPI()
//       if (result.status === 200) {
//         setAllDetails(result.data)
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }


//   const handleDeleteUser=async(userId)=>{
//     const token=sessionStorage.getItem("token")
//     if (token) {
//      const reqHeader = {
//        "Content-Type": "application/json",
//        "Authorization": `Bearer ${token}`
//      }
//   try{
//   const result=await deleteUserAPI(userId,reqHeader)
//   if(result.status==200){
//    getStudentDetails()
//   }else{
  
//   }
//   }catch(err){
//   console.log(err);
//   }
//   }
//   }




//   console.log(allDetails);

//   useEffect(() => {
//     getStudentDetails()
   
//   }, [])







// const {editResponse,setEditResponse} =useContext(updateResponseContext)

  // const {addResponse,setAddResponse} =useContext(addResponseContext)

  const [allUsers, setAllUsers] = useState([])

  const getUserDetails = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getUserDetailsAPI(reqHeader)
        if (result.status === 200) {
          setAllUsers(result.data)
        }
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])



  // console.log(allDetails);


const handleDeleteUser=async(userId)=>{
  const token=sessionStorage.getItem("token")
  if (token) {
   const reqHeader = {
     "Content-Type": "application/json",
     "Authorization": `Bearer ${token}`
   }
try{
const result=await deleteUserAPI(userId,reqHeader)
if(result.status==200){
 getUserDetails()
}else{

}
}catch(err){
console.log(err);
}
}
}


  return (
    <div style={{backgroundColor:"bisque"}} >
<div className='text-center  ' style={{fontSize:"50px"}}>
 <b> User Details</b>
</div>
<Table >


<thead>
        <tr>
          <th> </th>
          <th> Name</th>
         <th>Email</th>
          <th>Password</th>
          <th></th>
        </tr>
      </thead>



      
     
      {allUsers.length>0 && allUsers.map((users,index)=>(
        <tbody key={index} className='justify-content-center'>
        <tr users={users}>
<td></td>
          <td>{users?.username}</td>
          <td>{users?.email}</td>
          <td>{users?.password}</td>
          <td>
          <Edit users={users}></Edit>
            {/* <a href="" target='_blank' className='btn btn-link ms-1'><i style={{ height: '34px' }} className="fa-brands fa-github fa-2x"></i></a> */}
            <button onClick={()=>handleDeleteUser(users._id)} className='btn btn-link text-danger ms-1'><i style={{ height: '34px' }} className="fa-solid fa-trash fa-2x"></i></button>
             </td>
         
        </tr>
        
      </tbody>  ))}
    

</Table>
        
        {/* {allDetails.length>0 && allDetails.map((users,index)=>(
              <div key={index} className=" me-5 ">
                <TableView users={users} />
              </div>
            
            )) */}
{/* } */}

{/* <TableView></TableView> */}

    </div>
  )
}

export default View