import useFetch from './useFetch';
import BlogList from "./BlogList";




const Home = () => {
    const url = process.env.REACT_APP_API_URL ;
 const {data, isLoading, error} = useFetch(`${url}/`);   
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