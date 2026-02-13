import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import "./Wb.css"
import { CiStar } from "react-icons/ci";

function Wb() {
    return (
        <div>


            <div>







                <h2 className="text-white ml-180 mt-5"> SkillS  </h2>

                <div className="min-h-screen flex items-center justify-center p-10">


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}><TiHtml5 />  </div>
                            <p className="text-gray-600">        </p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}>  <FaCss3 /> </div>

                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }} >  <FaBootstrap /></div>
                            <p className="text-gray-600">This is the third card description.</p>
                            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}><RiJavascriptFill /> </div>
                            <p className="text-gray-600">This is the fourth card description.</p>
                            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}>  <FaReact /> </div>
                            <p className="text-gray-600">This is the fifth card description.</p>
                            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}>  <RiTailwindCssFill /> </div>
                            <p className="text-gray-600">This is the fifth card description.</p>
                            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>


                        <div className="bg-sky-400 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "blue" }}>  <FaPython /> </div>
                            <p className="text-gray-600"></p>
                            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>

                        <div className="bg-sky-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300">
                            <div style={{ fontSize: "70px", color: "yellow" }}>  <SiMysql /> </div>
                            <p className="text-gray-600">This is the fifth card description.</p>
                            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg">
                                Read More
                            </button>
                        </div>



                    </div>
                </div>




            </div>


            <h2 className=" text-white bg-yellow-400"  > About My Project </h2>
            <div className="project ">

                <div className="photo  bg-sky-900 relative h-screen  overflow-hidden ">


                    <img src="./24.png" className='absolute -top-10'></img>


                </div>

                <div className="about-pro mr-150 text-white">
                    <h2 className="text-white">💻 Technical Skills</h2>
                    <ul>
                        <li ><CiStar /> Proficient in HTML, CSS, and JavaScript  </li>
                        <li> <CiStar /> Experienced in Bootstrap and Tailwind CSS for responsive UI design</li>
                        <li> <CiStar />Skilled in React.js for building dynamic and interactive web applications</li>
                        <li> <CiStar />Good knowledge of Python programming</li>
                        <li><CiStar />Familiar with MySQL for database management </li>

                    </ul>


                </div>




            </div>

 <h2 className="bg-yellow-400 text-white"> Projects  </h2>

            <div className="min-h-screen  flex items-center justify-center p-8">
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <img
                            src="./Ecom.png"
                            alt="E-commerce"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">E-Commerce Website</h2>
                            <p className="text-gray-600 text-sm">
                                Built a full-featured online store using React, Tailwind CSS, and MySQL.
                            </p>
                            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                View Project
                            </button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <img
                            src="./to-do.png"
                            alt="To-Do App"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">To-Do List App</h2>
                            <p className="text-gray-600 text-sm">
                                Created a task management app with JavaScript and local storage.
                            </p>
                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                View Project
                            </button>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                        <img
                            src="./500px.jpg"
                            alt="Portfolio"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">Portfolio Website</h2>
                            <p className="text-gray-600 text-sm">
                                Designed and developed a personal portfolio using React and Tailwind CSS.
                            </p>
                            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                                View Project
                            </button>
                        </div>
                    </div>

                </div>
            </div>










        </div>
    )
}

export default Wb