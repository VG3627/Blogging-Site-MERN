import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "./Context/authContext";
const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const {state} = useContext(AuthContext);
    const handleClick = async () => {

        const res = await fetch(`http://localhost:3069/api/blogs/${id}`,
            {
                method: 'DELETE',
                headers: {'authorization' : `Bearer ${state.user.token}`}
            }
        )

        const result = await res.json();
        console.log(result);
        if (res.ok) {
            navigate('/');
            console.log("blog deleted");
        }
        else {
            console.log("failed to delete the blog");
        }
    }


    const { data: blog, isLoading, error } = useFetch(`http://localhost:3069/api/blogs/${id}`)


    return (
        <div className="Blog-details" style={{ fontFamily: "merryweather" }}>
            {error && <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh", fontFamily: "merryweather" }}>
                {error}</div>}
            {isLoading && <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {blog && (
                <article>
                    <h2 className="text-center mb-3">{blog.title}</h2>
                    <p className="text-center mb-3">author : {blog.Author}</p>
                    <div className="text-start mb-4">{blog.body}</div>
                    {state.user && blog.Author === state.user.email && (<div className="d-flex justify-content-center">
                        <Button variant="outline-light" onClick={handleClick}>
                            Delete
                        </Button>
                    </div>)}
                </article>
            )}
        </div>
    );
}

export default BlogDetails;