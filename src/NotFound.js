import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 Error</h2>
            <p>Requested URL Not Found</p>
            <Link to="/">Back To Home Page</Link>
        </div>
     );
}
 
export default NotFound;