import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form,Input,Label,FormGroup } from 'reactstrap';
import RegistrationForm from './RegistrationForm';



function Login(args) {
  const [modal, setModal] = useState(false);
  const [formdata,setFormdata] = useState({
    email:'',
    password:''
  })
  const handleInput= (e) => {
    
    const {name,value}= e.target
    setFormdata({
        ...formdata,
        [name]:value
    })

  }
  console.log(formdata)

  const toggle = (e) => {
    e.preventDefault();
    
    setModal(!modal)
}; 
const handleSubmit = async (e) =>{
  console.log(formdata.email);
  console.log(formdata.password);
  e.preventDefault();
  try{
    let response = await axios.get(`http://localhost:3021/login/${formdata.email}/${formdata.password}`)
    console.log(response)


  }catch (err){
    throw err
  }
  alert("Login  successful");
  setModal(!modal)
 }

  return (
    <div>
      
      <Button color="light" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
        
        <Form onSubmit={handleSubmit}>
  <FormGroup
  >
    <Label
      for="exampleEmail"
      hidden
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Email"
      type="email"
      value={formdata.email}
      onChange={handleInput}
      required
    />
  </FormGroup>
  {' '}
  <FormGroup >
    <Label
      for="examplePassword"
      hidden
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
      value={formdata.password}
      onChange={handleInput}
      required
    />
  </FormGroup>
  {' '}
  <Button type='submit'>
    Submit
  </Button>
</Form>
        </ModalBody>
        <ModalFooter>
          <p>Don't have an account?</p>
          <RegistrationForm/>{''}
          
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Login;