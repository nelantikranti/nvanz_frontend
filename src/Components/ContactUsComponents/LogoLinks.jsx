
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
const LogoLinks = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#141210_0%,#2A1D08_100%)] py-[35px] sm:py-[40px] lg:py-[50px]">
      <div className="mx-auto flex w-[90%] items-center justify-center gap-[25px] sm:gap-[35px] md:gap-[45px]">

        <a
          href="https://www.instagram.com/nvanzelevators?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          className="text-[#E9A60F] transition-all duration-300 hover:-translate-y-[4px] hover:scale-110"
        >
          <FaInstagram className="text-[32px] sm:text-[40px] md:text-[50px]" />
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn"
          className="text-[#E9A60F] transition-all duration-300 hover:-translate-y-[4px] hover:scale-110"
        >
          <CiLinkedin className="text-[32px] sm:text-[40px] md:text-[50px]" />
        </a>

        <a
          href="https://www.facebook.com/people/NVANZ-Elevators/61595375391562/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook"
          className="text-[#E9A60F] transition-all duration-300 hover:-translate-y-[4px] hover:scale-110"
        >
          <FaFacebook className="text-[32px] sm:text-[40px] md:text-[50px]" />
        </a>

        <a
          href="https://www.youtube.com/@NVANZElevators"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our YouTube"
          className="text-[#E9A60F] transition-all duration-300 hover:-translate-y-[4px] hover:scale-110"
        >
          <FiYoutube className="text-[32px] sm:text-[40px] md:text-[50px]" />
        </a>

      </div>
    </section>
  );
};

export default LogoLinks;