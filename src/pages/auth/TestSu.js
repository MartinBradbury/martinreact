import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TestSu() {

    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = signUpData;
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post("/dj-rest-auth/registration/", signUpData);
            navigate('/home');
        } catch(err) {
            setErrors(err.response?.data);
        }
    }



    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label className='d-none'>Username</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="username"
                name="username" 
                onChange={handleChange}
                value={username}
                autoComplete="new-username"
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert varient="warning" key={idx}>
                {message}
            </Alert>
          ))}
          <Form.Group className="mb-3" controlId="password1">
            <Form.Label className='d-none'>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                name="password1" 
                onChange={handleChange}
                value={password1}
                autoComplete="new-password"
            />
          </Form.Group>
          {errors.password1?.map((message, idx) => (
            <Alert varient="warning" key={idx}>
                {message}
            </Alert>
          ))}
          <Form.Group className="mb-3" controlId="password2">
            <Form.Label className='d-none'>Repeat Password</Form.Label>
            <Form.Control 
                type="password"
                placeholder="Repeat Password"
                name="password2"
                onChange={handleChange} 
                value={password2}
                autoComplete="new-password"
            />
          </Form.Group>
          {errors.password2?.map((message, idx) => (
            <Alert varient="warning" key={idx}>
                {message}
            </Alert>
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }

export default TestSu