import { Link } from "react-router-dom"
import "/assets/css/Navbar.css"
function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="row flex-wrap">
                    <div className="col-8">
                        <h4 style={{ color: "white" }}>  PortFolio.</h4>
                    </div>
                    <div className="col-1">
                        <Link  to={"/"} style={{textDecoration:"none"}}> <i className="bi bi-house-door"></i> Home</Link>
                    </div>
                    <div style={{width:"120px"}} className="col-1">
                        <Link to={"education"} style={{textDecoration:"none"}}> <i className="bi bi-book-half"></i> Education</Link>
                    </div>
                    <div className="col-1">
                        <Link to={"contact"} style={{textDecoration:"none"}}> <i className="bi bi-telephone"></i>Resume</Link>
                    </div>
                    {/* <div className="col-2">
                        <Link to={"service"} style={{textDecoration:"none"}}> <i className="bi bi-bicycle"></i> Services</Link>
                    </div> */}
                    {/* <div className="col-1">
                        <Link to={"scs"}>Portfolio</Link>
                    </div>  */}
                </div>

            </div>
        </div>
    )
}

export default Navbar