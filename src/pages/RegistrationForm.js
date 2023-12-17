import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Col, Label, Input, Form, Row} from 'reactstrap';
import Login from './Login';
function RegistrationForm(args) {
  const [modal, setModal] = useState(false);
  const [registration, setRegistration] = useState({
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    check: ""

  })



  const handleInput = (e) => {
    const { name, value } = e.target
    setRegistration({
      ...registration,
      [name]: value
    })
  }



  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  console.log(registration)

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(registration.password)) {
      console.log("Password does not meet the requirements");
      return;
    }


    try {
      let response = await axios.post(`http://localhost:3021/register`, registration)
      console.log(response)
      alert("data inserted");
      alert("register successful");


    } catch (err) {
      throw err
    }
   
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        sign up
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Registration</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    value={registration.email}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">
                    Password
                  </Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    value={registration.password}
                    onChange={handleInput}
                    required
                  />

{!validatePassword(registration.password) && (
      <p style={{ color: "red" }}>
        Password must be at least 8 characters, contain one uppercase letter,
        one lowercase letter, and one special character.
      </p>
    )}

                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">
                Address
              </Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
                value={registration.address}
                onChange={handleInput}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">
                Address 2
              </Label>
              <Input
                id="exampleAddress2"
                name="address2"
                placeholder="Apartment, studio, or floor"
                value={registration.address2}
                onChange={handleInput}
                required
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">
                    City
                  </Label>
                  <Input
                    id="exampleCity"
                    name="city"
                    value={registration.city}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">
                    State
                  </Label>
                  <Input
                    id="exampleState"
                    name="state"
                    value={registration.state}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">
                    Zip
                  </Label>
                  <Input
                    id="exampleZip"
                    name="zip"
                    value={registration.zip}
                    onChange={handleInput}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input
                id="exampleCheck"
                name="check"
                type="checkbox"
                value={registration.check}
                onChange={handleInput}
                required
              />
              <Label
                check
                for="exampleCheck"
              >
                Check me out
              </Label>
            </FormGroup>
            <Button type='submit'>
              submit
            </Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <p>have an account?</p>
          <Login/>
          
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RegistrationForm;