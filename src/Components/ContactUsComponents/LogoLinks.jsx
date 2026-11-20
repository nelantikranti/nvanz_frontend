
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
const LogoLinks=()=>{

    return(
        <div className="bg-[linear-gradient(180deg,#141210_0%,#2A1D08_100%)] py-[50px]">

<div className="w-[90%] flex items-center justify-center gap-[30px] mx-auto">

 <a
  href="https://www.instagram.com/nvanzelevators?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Instagram"
  className="text-[#E9A60F] hover:text-[#E9A60F] transition-colors duration-300"
>
  <FaInstagram size={50} />
</a>


 <a
  href=""
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Instagram"
  className="text-[#E9A60F] hover:text-[#E9A60F] transition-colors duration-300"
>
  <CiLinkedin  size={50} />
</a>

 <a
  href="https://www.facebook.com/people/NVANZ-Elevators/61595375391562/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Facebook"
  className="text-[#E9A60F] hover:text-[#E9A60F] transition-colors duration-300"
>
  <FaFacebook size={50} />
</a>

 <a
  href="https://www.youtube.com/@NVANZElevators "
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Youtube"
  className="text-[#E9A60F] hover:text-[#E9A60F] transition-colors duration-300"
>
  <FiYoutube size={50} />
</a>

</div>
   





        </div>
    )
}

export default LogoLinks