// import React, { useContext, useEffect, useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'
// import SERVER_URL from '../services/serverUrl'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import { updateResponseContext } from '../Context/ContextShare';
// import { updateUserAPI } from '../services/allApi';

// function Edit({users}) {


// //   const {editResponse,setEditResponse}=useContext(updateResponseContext)
//   const [userData, setUserData] = useState({
//    username:users.username,email:users.email,password:users.password
//   })

//   const [preview,setPreview]=useState("")


//   const [show,setShow]=useState(false)
//   const handleShow=()=>setShow(true)
//   const handleClose=()=>{
//   setShow(false)
//   setProjectData ({id:users._id, username:users.username,email:users.email,password:users.password
// })
// setPreview("")
//   }

//   useEffect(()=>{
// // if(projectData.projectImage){
// // setPreview(URL.createObjectURL(projectData.projectImage))
// // }else{
// setPreview("")
// // }
//   },[userData])


//   const handleUpdateUser =async ()=>{
//     const {username,email,password} = userData

//     if(!username|| !email || !password ){
// toast.info("Please fill the form completely")
//     }else{

//       const reqBody=new FormData()
//   reqBody.append("username",username)
//   reqBody.append("email",email)
//   reqBody.append("password",password)


//   const token = sessionStorage.getItem("token")
//       if (token) {
//         const reqHeader = {
//           "Content-Type": preview?"multipart/form-data":"application/json",
//           "Authorization": `Bearer ${token}`
//         }
//         console.log("Proceed to Register API");
//         try{
// const result =await updateUserAPI(reqBody,reqHeader)
// if(result.status===200){
// handleClose()
// //share response to my project component
// // setEditResponse(result.data)

// }else{
//   console.log(result);
// }
//         }catch(err){
// console.log(err);
//         }
//     }
//   }
//   }






import React, { useContext, useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import SERVER_URL from "../services/serverUrl"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { updateResponseContext } from "../Context/ContextShare";
import { updateUserAPI } from "../services/allApi";

function Edit({ users ,}) {
  // const { editResponse, setEditResponse } = useContext(updateResponseContext)
  const [userData, setUserData] = useState({
    id:users._id,
    username: users.username,
    email: users.email,
    password: users.password,
  })

  const [preview, setPreview] = useState("")

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => {
    setShow(false)
    setUserData({
      id: users._id,
      username: users.username,
      email: users.email,
      password: users.password
    })
    setPreview("")
  }

//   useEffect(() => {
//     if (users.projectImage) {
//       setPreview(SERVER_URL + '/uploads/' + users.projectImage)
//     } else {
//       setPreview("")
//     }
//   }, [users.projectImage])

  const handleUpdateUser = async (e) => {
    const { id,username, email, password } = userData

    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    } else {

      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        console.log("Proceed to Register API");
        try {
          const result = await updateUserAPI(id,reqBody, reqHeader)
          if (result.status === 200) {
            e.preventDefault();
            handleClose()
           
            //share response to my project component
            // setEditResponse(result.data)

          } else {
            console.log(result);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  return (
    < >
 <button onClick={handleShow}  style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'><i style={{height:'34px'}} className="fa-solid fa-edit fa-2x me-2"></i></button>
 <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
{/* <label className=' w-100 d-flex align-items-center flex-column justify-content-center' >
  {/* <input type="file" style={{display:"none"}} onChange={e=>setUserData({...userData,projectImage:e.target.files[0]})} /> */}
  {/* <img  height={'100%'} width={'100%'} className='mt-5' src={preview?preview:`${SERVER_URL}/uploads/${project.projectImage}`} alt="project upload pic" /> */}
{/* </label>  */}
            </div>

            <div className='col-lg-8'>

              <div className='mb-3'>
                  <input className='border rounded p-2 w-100' type="text" placeholder='Username' value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>
              </div>
              <div className='mb-3'>
                  <input className='border rounded p-2 w-100' type="text" placeholder='email' value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>
              </div>
              <div className='mb-3'>
                  <input className='border rounded p-2 w-100' type="text" placeholder='password' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}/>
              </div>
              
               
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={(e) => handleUpdateUser(e)}  variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>

    </>
  )
}

export default Edit