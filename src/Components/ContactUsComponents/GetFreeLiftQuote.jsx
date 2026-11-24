// import { useRef, useState } from "react";


import IndiaGlobe,{LOCATIONS} from "../IndiaGlobe/IndiaGlobe";





import { useRef, useState } from "react";

const GetFreeLiftQuote = () => {
  const locations = [
    {
      name: "Hyderabad",
      address:
        "Appejay Business Center, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082",
      phone: "89780 39911",
    },
    {
      name: "Andhra Pradesh",
      address: "Andhra Pradesh Office Address",
      phone: "89780 39911",
    },
    {
      name: "Tamil Nadu",
      address: "Tamil Nadu Office Address",
      phone: "89780 39911",
    },
    {
      name: "Karnataka",
      address: "Karnataka Office Address",
      phone: "89780 39911",
    },
    {
      name: "Kerala",
      address:
        "1st floor, Ladlee Towers, Mahakavi vylopilli rd, THAMMANAM, KOCHI, kerala, 682032.",
      phone: "89780 39911",
    },
    {
      name: "Lucknow",
      address:
        "212, 2nd Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow-226010.",
      phone: "89780 39911",
    },
  ];

  const [selected, setSelected] = useState(0);
  const scrollRef = useRef(null);

  const scrollLocations = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction * 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)] py-[35px] sm:py-[45px] lg:py-[50px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Location Selector Section */}
        <div className="w-full py-[20px] sm:py-[25px] lg:py-[30px]">

          {/* Selection Container */}
          <div
            className="mx-auto flex w-full items-center gap-[8px] rounded-full border border-[#E9A60F66] bg-[#00000059] px-[8px] py-[8px]
            sm:w-[95%] sm:gap-[12px] sm:px-[12px]
            md:w-[90%] md:gap-[15px] md:px-[15px]
            lg:w-[85%] lg:gap-[20px] lg:px-[20px]"
          >

            {/* Left Arrow */}
           <button
  type="button"
  onClick={() => scrollLocations(-1)}
  aria-label="Scroll locations left"
  className="flex size-[34px] shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#E9A60F] text-[#E9A60F] transition-all duration-300 hover:bg-[#E9A60F] hover:text-[#141210]
  sm:size-[42px]
  md:size-[50px]
  lg:size-[60px] lg:border-[2px]"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[14px] sm:size-[17px] md:size-[20px] lg:size-[24px]"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
</button>

            {/* Scrollable Location Options */}
            <div
              ref={scrollRef}
              className="scrollbar-hide flex min-w-0 flex-1 items-center gap-[8px] overflow-x-auto scroll-smooth whitespace-nowrap
              sm:gap-[10px] md:gap-[12px] lg:gap-[15px]"
            >
              {locations.map((location, index) => (
                <button
                  key={location.name}
                  type="button"
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                  className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full border font-inter font-bold transition-all duration-300
                    px-[14px] py-[9px] text-[12px]
                    sm:px-[18px] sm:py-[11px] sm:text-[13px]
                    md:px-[24px] md:py-[13px] md:text-[15px]
                    lg:px-[35px] lg:py-[15px] lg:text-[17px]
                    ${
                      selected === index
                        ? "border-[#E9A60F] bg-[#E9A60F] text-[#141210]"
                        : "border-transparent bg-transparent text-[#D8D2C6] hover:text-white"
                    }`}
                >
                  {location.name}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            
<button
  type="button"
  onClick={() => scrollLocations(1)}
  aria-label="Scroll locations right"
  className="flex size-[34px] shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#E9A60F] text-[#E9A60F] transition-all duration-300 hover:bg-[#E9A60F] hover:text-[#141210]
  sm:size-[42px]
  md:size-[50px]
  lg:size-[60px] lg:border-[2px]"
>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[14px] sm:size-[17px] md:size-[20px] lg:size-[24px]"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
</button>


          </div>

          {/* Selected Location Details */}
          <div className="mx-auto mt-[20px] w-full px-[5px] text-center sm:mt-[22px] sm:w-[90%] md:mt-[25px] lg:w-[90%]">

            <p className="break-words font-inter text-[12px] leading-[1.8] text-[#D8D2C6] sm:text-[14px] md:text-[16px] lg:text-[18px]">
              <span className="font-bold text-white">
                {locations[selected].name}
              </span>
              {" · "}
              {locations[selected].address}
              {" · "}
              {locations[selected].phone}
            </p>

          </div>
        </div>


        {/* <IndiaGlobe/> */}

        {/* Free Quote Form */}
        <div className="mx-auto mt-[15px] w-full max-w-[450px] rounded-[16px] border-[2px] border-[#E9A60F99] px-[18px] py-[20px]
          sm:mt-[20px] sm:rounded-[18px] sm:px-[25px] sm:py-[22px]
          md:px-[30px] md:py-[25px]
          lg:rounded-[20px] lg:py-[10px]"
        >

          {/* Form Heading */}
          <p className="text-center font-bebas text-[30px] leading-tight text-white sm:text-[32px] md:text-[34px]">
            GET A FREE LIFT QUOTE
          </p>

          {/* Form Description */}
          <p className="mx-auto mt-[5px] w-full text-center font-inter text-[12px] leading-[1.6] text-[#D8D2C6] sm:w-[85%] sm:text-[13px] md:w-[80%] lg:w-[60%]">
            Fill in 3 quick details. Our team will reply within 24 hours.
          </p>

          {/* Form Inputs */}
          <form className="mt-[20px] flex flex-col gap-[10px] sm:mt-[22px]">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-[10px] border border-[#E9A60F66] bg-[#00000073] px-[15px] py-[11px] font-inter text-[13px] text-white outline-none placeholder:text-[#A79F90] focus:border-[#E9A60F] sm:px-[20px] sm:py-[12px] sm:text-[14px]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-[10px] border border-[#E9A60F66] bg-[#00000073] px-[15px] py-[11px] font-inter text-[13px] text-white outline-none placeholder:text-[#A79F90] focus:border-[#E9A60F] sm:px-[20px] sm:py-[12px] sm:text-[14px]"
            />

            <select
              defaultValue=""
              className="w-full cursor-pointer rounded-[10px] border border-[#E9A60F66] bg-[#00000073] px-[15px] py-[11px] font-inter text-[13px] text-[#A79F90] outline-none focus:border-[#E9A60F] sm:px-[20px] sm:py-[12px] sm:text-[14px]"
            >
              <option value="" disabled>
                What do you need?
              </option>
              <option value="Home Lift">Home Lift</option>
              <option value="Apartment Lift">Apartment Lift</option>
              <option value="Office/Commercial Lift">
                Office/Commercial Lift
              </option>
              <option value="Hospital Lift">Hospital Lift</option>
              <option value="Maintenance/Repair">
                Maintenance/Repair
              </option>
              <option value="Other">Other</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[#E9A60F] py-[12px] font-inter text-[13px] font-bold text-[#141210] transition-all duration-300 hover:bg-white sm:py-[14px] sm:text-[14px] md:text-[15px]"
            >
              Get My Free Quote
            </button>

            {/* Privacy Text */}
            <p className="text-center font-inter text-[10px] leading-[1.6] text-[#A79F90] sm:text-[11px] md:text-[12px]">
              We respect your privacy. We will only use your details to contact
              you about your enquiry.
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default GetFreeLiftQuote;
