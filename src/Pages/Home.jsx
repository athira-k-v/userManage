import React from 'react'
// import { Link } from 'react-router-dom'
// import Header from '../Components/Header'
import {  Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Cards from '../Components/Cards';
Cards
function Home() {


    
  return (

  <div className='bg ' style={{height:'800px'}} >


<div style={{marginLeft:'150px',padding:'100px'}} >

<div className='text-end'>
  <Link to={'/view'}><button className='btn btn-light'>View Users</button></Link>
</div>

  <h1  style={{fontFamily:"cursive",fontSize:'50px',color:'white'}}><b>Welcome User</b></h1>
                  <br />
                  <br />
                  <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur  
                  adipisicing elit. Ipsa tempora totam rem consequuntur accusamus quidem voluptas perferendis <br /> sapiente earum incidunt tempore deleniti temporibus itaque molestiae hic placeat quaerat, maxime autem. Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit. Corporis illum libero, id, tenetur odio voluptatem vel dignissimos quo magni sapiente modi  <br />dolorem perspiciatis pariatur totam labore incidunt! Doloremque, repudiandae soluta!</p>
  <br /><br />
                  <a href="" style={{textDecoration:"none"}}>New User</a>
           <span style={{color:"white"}}>       click here</span>
                 <Link to={'/register'}> <button  className='btn btn-light'> REGISTER</button></Link>
          
  
</div>

        
    </div>

  )
}

export default Home