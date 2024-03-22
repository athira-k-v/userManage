// import React from 'react'
// import { Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Spinner from 'react-bootstrap/Spinner';
// // import Form from 'react-bootstrap/Form';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

// function Auth({insideRegister}) {
//   return (
//     <div>
//          <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
//       <div className='container w-75'>
//         <Link to={'/'}> <i className='fa-solid fa-arrow-left'></i>Back To Home</Link>
//         <div className="card shadow p-5" style={{ backgroundColor: "#9f71f5" }}>
//           <div className='row align-items-center'>
//             <div className='col-lg-4'>
//               <img className='w-100' src="" alt="Authentication" />
//             </div>
//             <div className='col-lg-6'>
//               <h1 className='fw-bolder text-light mt-2 ms-2'>
//                 <i style={{ height: '41px' }} className='fa-solid fa-hands-holding-circle '><span className='ms-3'></span></i>
//               </h1>
//               <h5 className='fw-bolder text-light mt-2 t'> Sign {insideRegister ? 'Up' : 'In'}to your Account
//               </h5>

//               <Form>
//                 {
//                   insideRegister &&

//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Control type="text" placeholder="Enter Name"
//                     //  value={userInputData.username} onChange={e => setUserInputData({ ...userInputData, username: e.target.value })} 
//                      />
//                   </Form.Group>
//                 }
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control type="email" placeholder="Enter email"
//                   //  value={userInputData.email} onChange={e => setUserInputData({ ...userInputData, email: e.target.value })}
//                     />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Control type="password" placeholder="Enter Password"
//                   //  value={userInputData.password} onChange={e => setUserInputData({ ...userInputData, password: e.target.value })} 
//                    />
//                 </Form.Group>

//                 {
//                   insideRegister ?
//                     <div>
//                       <button  className='btn btn-light mb-2'>Register</button>
//                       <p>Already Have a Account? <Link to={'/login'} className='text-light'>Login</Link> </p>
//                     </div> :
//                     <div>
//                       <button  className='btn btn-light mb-2'>Login{ <Spinner animation="border" variant="primary" />} </button>
//                       <p>New User? Click here to  <Link to={'/register'} className='text-light'>Register</Link></p>
//                     </div>
//                 }
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
//     </div>

//     </div>
//   )
// }

// export default Auth




import React, {  useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import login from '../assets/login.png'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { loginAPI, registerAPI } from '../services/allApi';
import Spinner from 'react-bootstrap/Spinner';
import { TokenAuthContext } from '../Context/TokenAuth';


function Auth({ insideRegister }) {
  // console.log(insideRegister);
  // const [isAuthorised,setIsAuthorised] = useContext(TokenAuthContext)

  const [loginStatus, setLoginStatus] = useState()

  const navigate = useNavigate()

  const [userInputData, setUserInputData] = useState({
    username: "", email: "", password: ""
  })



  const handleRegister = async (e) => {
    e.preventDefault()
    // console.log(userInputData);
    const { username, email, password } = userInputData
    if (!username || !email || !password) {
      toast.info("please fill the form completely")
    } else {
      // toast.success("proceed to register api")
      try {
        const result = await registerAPI(userInputData)
        console.log(result);
        if (result.status === 200) {
          toast.success(`Welcome ${result.data.username}... Please login to explore the site !!!`)
          setUserInputData({ username: "", email: "", password: "" })
          //navigate to login 

          setTimeout(() => {
            navigate("/login")
          }, 2000)

        } else {
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }





  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(userInputData);

    const { email, password } = userInputData
    if (!email || !password) {
      toast.info("please fill the form completely")
    } else {
      // toast.success("proceed to register api")
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status === 200) {

          //store token,username
          sessionStorage.setItem("username", result.data.existingUser.username)
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("userDetails", JSON.stringify(result.data.existingUser))
          setLoginStatus(true)
          // setIsAuthorised(true)

          setTimeout(() => {
            setUserInputData({email: "",password: "" })
            //navigate to landing page
        navigate("/")
            setLoginStatus(false)
          }, 2000)


        } else {
          toast.error(result.response.data)
        }
      } catch (err) {
        console.log(err);
      }
    }
  }





  return (
    <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center align-items-center bg2'>
      <div className='container w-75'>
        <Link to={'/'}> <i className='fa-solid fa-arrow-left'></i>Back To Home</Link>
        <div className="card shadow p-5 bg3" style={{  }}>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <img className='w-100' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsbVrFAdT3UaOaiySXBd9XoWpRSQ09iB72v6pbC8ZKRdtU4IZs" alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='fw-bolder text-light mt-2 ms-2'>
                <i style={{ height: '41px' }} className='fa-solid fa-hands-holding-circle '><span className='ms-3'>User </span></i>
              </h1>
              <h5 className='fw-bolder text-light mt-2 t'> Sign {insideRegister ? 'Up' : 'In'}to your Account
              </h5>

              <Form>
                {
                  insideRegister &&

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Name" value={userInputData.username} onChange={e => setUserInputData({ ...userInputData, username: e.target.value })} />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" value={userInputData.email} onChange={e => setUserInputData({ ...userInputData, email: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Enter Password" value={userInputData.password} onChange={e => setUserInputData({ ...userInputData, password: e.target.value })} />
                </Form.Group>

                {
                  insideRegister ?
                    <div>
                      <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                      <p className='text-light'>Already Have a Account? <Link to={'/login'} className='text-light'>Login</Link> </p>
                    </div> :
                    <div>
                      <button onClick={handleLogin} className='btn btn-light mb-2'>Login{loginStatus && <Spinner animation="border" variant="primary" />} </button>
                      <p className='text-light'>New User? Click here to  <Link to={'/register'} className='text-light'>Register</Link></p>
                    </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
    </div>
  )
}
export default Auth