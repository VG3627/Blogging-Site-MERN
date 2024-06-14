import { ListGroup,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BlogList = ({ blogs, title }) => {
    
    if(blogs.length === 0)
    {
        return (
            <Row className="justify-content-center mt-3">
            <Col xs="auto">
              <h2 variant="danger" className="text-center">
                No blogs :(
              </h2>
            </Col>
          </Row>
        )
    }
    
    return (
        <div className="blog-list" style={{ fontFamily: "merryweather" }}>
            <h2 className="text-center mb-3">{title}</h2>
            <ListGroup className="mb-4" style={{ maxWidth: '900px', margin: 'auto' }}>
                {
                    blogs.map((blog) => {

                        return (
                            <div className="blog-preview" key={blog._id}>
                                <Link to={`blog/${blog._id}`} style={{textDecoration:"none"}}>
                                    <ListGroup.Item className="list-group-item-hover mb-3 list-group-item-dark" style={{ borderRadius: '8px' }}>
                                        <h2 className="text-start">{blog.title}</h2>
                                        <p className="text-start">Written by: {blog.Author}</p>
                                    </ListGroup.Item>
                                </Link>
                            </div>
                        )

                    })
                }
            </ListGroup>
        </div>


    );
}

export default BlogList;