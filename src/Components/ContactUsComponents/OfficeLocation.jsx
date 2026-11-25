

// const OfficeLocation = () => {
//      const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.751808548339!2d78.45989201053648!3d17.42369450168951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b55806837b%3A0x4dc1b70683fc260!2sApeejay%20Business%20Centre!5e0!3m2!1sen!2sin!4v1795154606224!5m2!1sen!2sin";
//     return (
//         <div className="bg-[linear-gradient(180deg,#141210_0%,#2A1D08_100%)] py-[50px]">

//             <div className="w-[90%] mx-auto">

//                 <p className="text-[78px] font-bebas text-white">
//                     VISIT OUR <span className="text-[#E9A60F]">OFFICE</span>
//                 </p>

//                 <div className="border-[2px] border-[#E9A60F80] rounded-[20px] w-full h-[420px] overflow-hidden">

//                 <iframe
//         src={mapUrl}
//         title="NVANZ Elevators Location"
//         width="100%"
//         height="100%"
//         style={{ border: 0 }}
//         loading="lazy"
//         allowFullScreen
//         referrerPolicy="no-referrer-when-downgrade"
//       />    
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default OfficeLocation;




const OfficeLocation = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.751808548339!2d78.45989201053648!3d17.42369450168951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b55806837b%3A0x4dc1b70683fc260!2sApeejay%20Business%20Centre!5e0!3m2!1sen!2sin!4v1795154606224!5m2!1sen!2sin";

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#141210_0%,#2A1D08_100%)] py-[40px] sm:py-[50px] lg:py-[65px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Section Heading */}
        <div className="mb-[20px] flex flex-col items-center text-center sm:mb-[25px] sm:items-start sm:text-left">

          <span className="mb-[8px] font-inter text-[10px] font-bold tracking-[3px] text-[#E9A60F] sm:text-[11px]">
            FIND US HERE
          </span>

          <h2 className="font-bebas text-[48px] leading-[0.95] text-white sm:text-[60px] md:text-[68px] lg:text-[78px]">
            VISIT OUR{" "}
            <span className="text-[#E9A60F]">OFFICE</span>
          </h2>

          <p className="mt-[12px] max-w-[550px] font-inter text-[13px] leading-[1.7] text-[#D8D2C6] sm:text-[14px] md:text-[15px]">
           Our office is at Appejay Business Center, Raj Bhavan Road, Somajiguda, Hyderabad. Please call before visiting so we can be ready for you.
          </p>

        </div>

        {/* Map Container */}
        <div className="group relative w-full overflow-hidden rounded-[14px] border-[2px] border-[#E9A60F80] bg-[#00000059]  shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[#E9A60F] hover:shadow-[0_15px_45px_rgba(233,166,15,0.12)] sm:rounded-[18px]  md:rounded-[20px]">

          <div className="relative h-[280px] w-full overflow-hidden rounded-[10px] sm:h-[350px] sm:rounded-[13px] md:h-[400px] lg:h-[420px]">

            <iframe
              src={mapUrl}
              title="NVANZ Elevators Office Location - Apeejay Business Centre, Hyderabad"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          {/* Gold Bottom Accent */}
          <div className="absolute bottom-0 left-[10%] h-[2px] w-[80%] bg-gradient-to-r from-transparent via-[#E9A60F] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        </div>

        {/* Location Information */}
        <div className="mt-[15px] flex flex-col items-center justify-between gap-[12px] sm:mt-[20px] sm:flex-row">

          <div className="flex items-center gap-[10px] text-center sm:text-left">

            <div className="flex size-[36px] shrink-0 items-center justify-center rounded-full border border-[#E9A60F66] bg-[#E9A60F15] text-[#E9A60F]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <div>
              <p className="font-inter text-[12px] font-bold text-white sm:text-[13px]">
                NVANZ Elevators
              </p>
              <p className="font-inter text-[11px] text-[#A79F90] sm:text-[12px]">
                Apeejay Business Centre, Hyderabad
              </p>
            </div>

          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Apeejay+Business+Centre+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] rounded-full border border-[#E9A60F] px-[18px] py-[9px] font-inter text-[11px] font-bold text-[#E9A60F] transition-all duration-300 hover:bg-[#E9A60F] hover:text-[#141210] sm:text-[12px]"
          >
            Get Directions
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default OfficeLocation;
