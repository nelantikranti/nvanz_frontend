import { useState } from "react";


import IndiaGlobe,{LOCATIONS} from "../IndiaGlobe/IndiaGlobe";

const GetFreeLiftQuote=()=>{

     const [sel, setSel] = useState(null);
     const locations = [
        {
            name: "Tamil Nadu",
            address: "Tamil Nadu Office Address",
            phone: "089780 39911"
        },
        {
            name: "Hyderabad",
            address: "Appejay Business Center, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082",
            phone: "089780 39911"
        },
        {
            name: "Kerala",
            address: "Kerala Office Address",
            phone: "089780 39911"
        },
        {
            name: "Andhra Pradesh",
            address: "Andhra Pradesh Office Address",
            phone: "089780 39911"
        }
    ];

     const [selected, setSelected] = useState(1);

    return(
       <div className="bg-[linear-gradient(135deg,#0D0B09_0%,#1C1610_60%,#2A1D08_100%)] py-[50px]">

        <div className="w-[90%] mx-auto">

             <div className="w-full py-[30px]">

            {/* Selection Container */}
            <div className="w-[85%] mx-auto flex items-center justify-between gap-[20px] 
            border border-[#E9A60F66] bg-[#00000059] rounded-full px-[20px] py-[8px]">

                {/* Left Arrow */}
                <button
                    onClick={() => setSelected((prev) => 
                        (prev - 1 + locations.length) % locations.length
                    )}
                    className="size-[60px] cursor-pointer shrink-0 rounded-full border-[2px] border-[#E9A60F] 
                    flex items-center justify-center text-[#E9A60F] 
                    hover:bg-[#E9A60F] hover:text-[#141210] transition-all duration-300"
                >
                    <span className="text-[35px] ">◀</span>
                </button>

                {/* Location Options */}
                <div className="flex items-center justify-center gap-[15px] flex-1">

                    {locations.map((location, index) => (
                        <button
                            key={location.name}
                            onClick={() => setSelected(index)}
                            className={`px-[35px] py-[15px] cursor-pointer rounded-full whitespace-nowrap
                            font-inter font-bold text-[17px] transition-all duration-300
                            border border-transparent
                            ${
                                selected === index
                                ? "bg-[#E9A60F] text-[#141210]"
                                : "bg-transparent text-[#D8D2C6] hover:text-white"
                            }`}
                        >
                            {location.name}
                        </button>
                    ))}

                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => setSelected((prev) => 
                        (prev + 1) % locations.length
                    )}
                    className="size-[60px] cursor-pointer shrink-0 rounded-full border-[2px] border-[#E9A60F] 
                    flex items-center justify-center text-[#E9A60F] 
                    hover:bg-[#E9A60F] hover:text-[#141210] transition-all duration-300"
                >
                    <span className="text-[35px]">▶</span>
                </button>

            </div>



             {/* <IndiaGlobe selectedId={sel} onSelect={setSel} />
      <div role="group" aria-label="Select location" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
        {LOCATIONS.map((l) => (
          <button key={l.id} onClick={() => setSel(l.id === sel ? null : l.id)} aria-pressed={sel === l.id}
            style={{
              padding: "8px 16px", borderRadius: 999, border: "1.5px solid #ffc400", cursor: "pointer",
              background: sel === l.id ? "#ffc400" : "transparent", color: sel === l.id ? "#1a1200" : "#ffc400", font: "600 14px system-ui",
            }}>{l.label}</button>
        ))}
      </div> */}

            {/* Selected Location Details */}
            <div className="w-[90%] mx-auto mt-[25px] text-center">

                <p className="font-inter text-[18px] text-[#D8D2C6]">
                    {locations[selected].name} · {locations[selected].address} · {locations[selected].phone}
                </p>

            </div>

        </div>




            <div className="w-[450px] border-[2px] border-[#E9A60F99] rounded-[20px] px-[30px] py-[10px] mx-auto">

                
            <p className="text-[34px] font-bebas text-[#FFFFFF] text-center">GET A FREE LIFT QUOTE</p>

            <p className="text-[13px] font-inter text-[#D8D2C6] w-[60%] text-center mx-auto">Fill in 3 quick details. Our team will reply within 24 hours.</p>


            <form className="mt-[20px] flex flex-col gap-[10px]">

                <input placeholder="Your Name" className="px-[20px] py-[10px] border-[1px] border-[#E9A60F66] bg-[#00000073] text-[#A79F90] w-[100%] rounded-[10px] "/>
                <input placeholder="Phone Number" className="px-[20px] py-[10px] border-[1px] border-[#E9A60F66] bg-[#00000073] text-[#A79F90] w-[100%] rounded-[10px] "/>

                 <select
        defaultValue=""
        className="px-[20px] py-[10px] border border-[#E9A60F66] bg-[#00000073]  w-full rounded-[10px] text-[#A79F90] outline-none focus:border-[#E9A60F] cursor-pointer"
    >
        <option value="What do you need?">What do you need?</option>
        <option value="Home Lift">Home Lift</option>
        <option value="Apartment Lift">Apartment Lift</option>
        <option value="Office/Commercial Lift">Office/Commercial Lift</option>
        <option value="Hospital Lift">Hospital Lift</option>
        <option value="Maintenance/Repair">Maintenance/Repair</option>
        <option value="Other">Other</option>
    </select>

    <div>
        <button className="w-[100%] bg-[#E9A60F] font-inter text-[15px] text-[#141210] font-bold py-[15px] rounded-full cursor-pointer ">Get My Free Quote</button>
    </div>

<p className="text-[12px] font-inter text-[#A79F90] text-center">We respect your privacy. We will only use your details to contact you about your enquiry.</p>



            </form>

            </div>


        </div>

        </div>
    )
}

export default GetFreeLiftQuote