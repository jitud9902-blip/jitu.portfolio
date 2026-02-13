import "/assets/css/Education.css"
import { Link } from "react-router-dom"

function Education() {
    return (
        <div>
            <div className='edu-part'>
                <div> <h2 className="Edu-let"> Education<i className="bi bi-book-half"></i></h2> </div>
                <div className='clg'>

                    <Link to="/wb" style={{ textDecoration: "none" }}>
                        <div style={{ padding: "20px", border: "1px solid black" }}>
                            <h2> Full stack Web Development<i className="bi bi-laptop"></i> </h2>
                            <h4> Sky skill Academy</h4>
                        </div>
                    </Link>

                    <div>  
                    <h4> june 2025 </h4>

                    </div>

                </div>

                <div className="clg">

                    <Link to="/scs" style={{ textDecoration: "none" }}>
                        <div style={{ padding: "20px", border: "1px solid black" }}>
                            <h2> Computer science And Engineering<i className="bi bi-laptop"></i> </h2>
                            <h4> Soro School of Engineering </h4>
                        </div>
                    </Link>




                    <div>
                        <h4> (2023-25) </h4>
                    </div>

                </div>

                <div className='clg'>

                    <Link to="/iti" style={{ textDecoration: "none" }}>
                        <div style={{ padding: "20px", border: "1px solid black" }}>
                            <h2>  Indurstial Trening Institute (ITI) <i className="bi bi-exposure"></i> </h2>
                            <h4> Ayodhya  Indurstial Trening Institute </h4>
                        </div>
                    </Link>


                    <div> <h4> (2021-23)</h4> </div>

                </div>

                <div className='clg'>

                    <Link to="#" style={{ textDecoration: "none" }}>

                        <div style={{ padding: "20px", border: "1px solid black" }}>
                            <h2>
                                Matriculation
                            </h2>
                            <h4> Nilambar govt. High School </h4>
                        </div>
                    </Link>


                    <div style={{ marginLeft: "140px" }}>
                        <h4> (2020-21)</h4>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Education
