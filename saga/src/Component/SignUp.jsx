import React,{useEffect, useState} from 'react';
import {Modal ,ModalHeader,ModalBody} from "reactstrap";
import LogIn from './LogIn';
const SignUp = ({signUpState}) => {
  const[modal1,setModal1]=useState(false);

  let changeSignUpState=(()=>
  {
    setModal1(!modal1)
  })
  // const[stateChange1,setStateChange1]=useState(false)
//  let signUpState=(()=>
//  {
//   setModal1(!modal1)
//  })

  // let changeState =(()=>
  // {
  //   // setStateChange1(!stateChange1)
  //   setModal1(!modal1)
  //   // console.log(stateChange1)
  // })
  // useEffect(()=>
  // {
  //   if(stateChange===false)
  //   { setModal1(!modal1)}
  // },[])
  return (
    <>
    <LogIn changeSignUpState={changeSignUpState}/>
  <div className='createAcc' onClick={signUpState}>Create Your Account</div>

    <Modal
    
    size='sm'
    isOpen={modal1}
    toggle={()=> {setModal1(!modal1) }}
    aria-labelledby="contained-modal-title-vcenter"
      centered
    >
   
    <form action="">
    
    <input type="text" placeholder='Name' />
    <input type="email" name="" id="" placeholder='Email' />
    
    <input type="number" name="" id="" placeholder='Mobile No'/>
    <input type="text" name="" id="" placeholder='Password'/>
    <input type="text" placeholder='Confirm Password'/>
    <button>Submit</button>
    </form>
    </Modal>
    </>
  )
}

export default SignUp