import "./Login.scss";
import Header from "../Header/Header";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import cogoToast from "cogo-toast";
function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = async (e) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);

    try {
      const respone = await axios.post("http://localhost:8089/users/login", urlencoded)
      localStorage.setItem('token', respone.data.access_token);
      cogoToast.loading("Login...Waiting a minute")
      window.setTimeout(()=>{
        navigate("/");
      },3500)
      
    }  catch (e) {
      console.log(e);
      cogoToast.loading("Login...Waiting a minute")
      window.setTimeout(()=>{
        cogoToast.error("Login failed by something went wrong");
      }, 3000)
    }
    
    
  }
  return (
    <div className="login">
      <Header />
      <img
        src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="text">
        <h1>Đăng nhập ngay để có thể sử dụng dịch vụ một cách tuyệt vời nhất</h1>
      </div>
      <div className="login_block">
        <h4>Login</h4>
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
          <h5>Already have an account? <Link to={"/register"}>Register</Link></h5>
          <Button variant="light" size="sm" className="rounded mx" type="submit" >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
