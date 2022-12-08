import React, { useEffect, useState } from 'react'
import {Modal,ModalHeader,ModalBody} from "reactstrap";
import SignUp from './SignUp';
const LogIn = ({changeSignUpState}) => {
  const[modal,setModal]=useState(false);
  const[stateChange,setStateChange]=useState(false)
  
  let changeState =(()=>
  {
    setModal(!modal)
  
  })
  let signUpState =(()=>
  {
    // changeSignUpState
    setModal(!modal)
  })
  // let signupState=(()=> {
  //   setModal(!modal);
  //   setStateChange(!stateChange)
  //   console.log(modal)
  // })
  // useEffect(()=>
  // {
  //   setStateChange(false)
  // },[])
  // useEffect(()=>
  // {
  //   console.log(modal + "login")
  //   if(modal1===true)
  //    setModal(!modal)
  // },[modal1])
  return (
    <>
    <i  class="fa fa-user" aria-hidden="true" onClick={changeState} ></i>
    <Modal
    
    size='sm'
    isOpen={modal}
    toggle={()=> {setModal(!modal) }}
    aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='loginParent'>
      <ModalHeader id='header'>
        <img className='loginLogo' src="./Images/Navbar/saga logo 2_1.jpg" alt="" />
        <div className='loginTitle'>LOGIN</div>
      </ModalHeader>
      <ModalBody >
        <div className='loginBody'>
        <form className='loginForm' action="">
        <input className='loginEmail'  type="text" placeholder="&#xf0e0; Name"/>
        <input  className='loginPass' type="password" name="" id="" placeholder='&#xf023; Password'/>
        <button className='loginButton'>LOGIN</button>
        </form>
        <div className='forgotPass'> Forgot Username / Password</div>

        <SignUp signUpState={signUpState} />
        
        </div>
      </ModalBody>
      </div>
    </Modal>
    </>
  )
}

export default LogIn