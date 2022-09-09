import "./Register.scss";
import Header from "../Header/Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const submitForm = () => {
    if(phone_number.length!==10) {
        cogoToast.error("Please enter valid phone number")
    }
  }
  return (
    <div className="register">
      <Header />
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="register_block">
        <h4>Create A New Account</h4>
        <Form onSubmit={submitForm} className="">
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              type="text"
              
            />
            <span></span>
            <Form.Label>
              Username
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              type="password"
              
            />
            <span></span>
            <Form.Label>
              Password
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={phone_number}
              onInput={(e) => setPhone_number(e.target.value)     }
              type="text"
              
            />
            <span></span>
            <Form.Label>
              Phone Number
            </Form.Label>
          </Form.Group>
          <h5>Have you ever have an account? <Link to={"/login"}>Login</Link></h5>
          <Button variant="light" size="sm" className="rounded mx" type="submit" >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
