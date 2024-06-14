// frontend/src/components/BlogForm.js
import { useState ,useContext } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/authContext';
const Create = () => {
    
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate() ;
    
    const { state } = useContext(AuthContext) ;
    if(!state.user)
    {
        return (
            <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Alert variant="danger" className="text-center">
              You need to login before writing blogs.
            </Alert>
          </Col>
        </Row>
        )
    }
  
    // console.log("islogin ? ",state.user,typeof(state.user)) ;


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const Author = state.user.email ;
        const blog = {title, body, Author};
         console.log(blog) ;

         
         fetch('https://blogging-site-mern-api-git-master-vg3627s-projects.vercel.app/api/blogs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization' : `Bearer ${state.user.token}`
            },
            body: JSON.stringify(blog)
          })
          .then((response) => {
            
            navigate('/');
            return response.json() ;
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
        
        // Here you can send the blogData to your backend API
    };

    return (
        <Container>
            <h1>Create a New Blog</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBlogTitle">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter blog title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBlogBody">
                    <Form.Label>Blog Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter blog content"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className='mb-3'
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Create;
