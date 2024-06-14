import useFetch from './useFetch';
import BlogList from "./BlogList";




const Home = () => {
   
 const {data, isLoading, error} = useFetch('http://localhost:3069/api/blogs');   
    return (


        <div className="Home">
            {error && <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" ,fontFamily:"merryweather"}}>
                {error}</div>}
            {isLoading && <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {data && <BlogList blogs={data} title="All Blogs!" />}

        </div>

    );
}

export default Home;