import './Header.css'
import TextType from '../Components/Texttype'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


function Header() {
  return (
    <div>


      <div className='cv-main'>
        <div className="cv">
          <h3 className='' style={{ color: "white" }}>Hello, Its me </h3>
          <h2 style={{ color: "white" }}> Jitendra Das </h2>
          <h4 style={{ color: "white" }}> And i'm a <span style={{ color: "skyblue" }}> Python Developer</span> </h4>
             
{/* st */}



<TextType 
  text={["Hello , its me Jitendra das, and i am a python developer with a full Stact developer "]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={[" well come to portfolio website!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>


{/* end */}









          <div className="social">

           
            <a style={{fontSize:"25px"}}  href="#">< FaFacebookF/> </a>
            <a style={{fontSize:"25px"}}  href="https://www.linkedin.com/in/jitendra-das-44292a363/"> <FaLinkedin/> </a>
            <a  style={{fontSize:"25px"}} href="https://www.instagram.com/"> <FaSquareInstagram/> </a>

          </div>
        <a href='/jitu.pdf'download><button className="rounded-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out">
  Download Cv
</button>
 </a>
          
        </div>



        <div className="ins  bg-sky-900 relative h-screen  overflow-hidden ">
        
            
          <img  src="./24.png" className='absolute -top-18'></img>
          
          
        </div>

      </div>
</div>

  
  )
}

export default Header