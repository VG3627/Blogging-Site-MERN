// frontend/src/components/LoginForm.js
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Context/authContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate() ;
  const {dispatch} = useContext(AuthContext) ;

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    try {
        const res = await fetch('https://blogging-site-mern-api-git-master-vg3627s-projects.vercel.app/login',
            {
                method:'POST',
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify({ email , password })
            }
        )

        // console.log(res);
        const data = await res.json();
        console.log(data) ;
        if(data.email)
        {
           localStorage.setItem('user',JSON.stringify(data)) ;
           dispatch({type:'LOGIN',payload:data}) ;
           navigate('/') ;
        }
        else
        {
          setErrors(data.error)
          console.log('could not login')
        }
       

        
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors}
            className='mb-3'
          />
          <Form.Control.Feedback type="invalid">
            {errors}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
