import { Link } from "react-router-dom"

const homeElevators = [
  { label: "Signature 1101", slug: "signature-1101" },
  { label: "Prestige 1110 · Rope", slug: "prestigeMrlRopeHome" },
  { label: "Prestige 1110 · Flat Belt", slug: "prestigeMrlFlatBelt" },
  { label: "Prestige 1110 · Grooved Belt", slug: "prestigeMrlGroovedBelt" },
  { label: "Ground 1506", slug: "groundHydraulicHome" },
  { label: "Panorama + Circular 1805", slug: "nvanzPanorama-1805" },
  { label: "Compact 1805", slug: "compact360Panoramic" },
]

const commercialCategories = [
  "Passengers",
  "Office",
  "Apartments",
  "Hotel",
  "Hospitals",
  "Goods / Service",
  "Car Parking",
]

const elevatorLevels = [
  {
    height: "h-[88px]",
    floors: 5,
  },
  {
    height: "h-[116px]",
    floors: 6,
  },
  {
    height: "h-[172px]",
    floors: 8,
  },
];

const commercialRoute = "/commercial-elevator-products"

function ProductPageSection2() {
  return (
    <section className="bg-[linear-gradient(135deg,#0D0B09_0%,#261B0A_100%)] py-10 sm:py-14">
      <div className="mx-auto grid w-[90%]  grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">

      
<div className="
    group relative flex min-h-[390px] overflow-hidden
    rounded-[24px] border border-[#E9A60F80]
    bg-[#1E1B17] p-6 sm:min-h-[396px] sm:p-7
    transition-all duration-500 ease-out
    hover:border-[2px]
    hover:-translate-y-2
    hover:border-[#E9A60F]
    hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
  ">

  {/* LEFT SECTION - 60% */} 
  <div className="flex-[0.6] min-w-0 flex flex-wrap flex-col ">

    <p className="
    font-bebas
    text-[170px]
    leading-none
    text-transparent
    [-webkit-text-stroke:2px_#E9A60F80]
    transition-all duration-700 ease-in-out
    group-hover:[-webkit-text-stroke:2px_#E9A60F]
    group-hover:[background-image:linear-gradient(rgba(233,166,15,0.2),rgba(233,166,15,0.2))]
    group-hover:[-webkit-background-clip:text]
    group-hover:bg-clip-text
  ">
      06
    </p>

    <p className="mt-5 font-inter text-[10px] font-bold uppercase tracking-[0.12em] text-[#E9A60F]">
      Products
    </p>

    <h2 className="mt-1 font-bebas text-[34px] leading-none text-white sm:text-[40px]">
      Home Elevators
    </h2>

    <ul className="mt-5 flex flex-wrap gap-2">
      {homeElevators.map((elevator) => (
        <li key={elevator.slug}>
          <Link
            to={`/products/${elevator.slug}`}
            className="inline-flex min-h-7 items-center rounded-full border border-[#E9A60F] px-3 py-1 font-inter text-[10px] text-white"
          >
            {elevator.label}
          </Link>
        </li>
      ))}
    </ul>

    <Link
      to="/home-elevator-products"
      className="mt-[10px] inline-flex min-h-[42px] w-fit items-center rounded-full border border-[#E9A60F] px-6 text-[12px] font-semibold text-[#E9A60F]"
    >
      Explore Home Elevators →
    </Link>

  </div>

  {/* RIGHT SECTION - 40% */}
  <div className="flex-[0.4] flex items-end py-[20px] min-w-0 ">
    <div className="w-[200px] h-[300px] flex items-center justify-center ">
      Your Image / Content
    </div>
  </div>

</div>

       

        <div
  className="
    group relative flex min-h-[390px] overflow-hidden
    rounded-[24px] border border-[#E9A60F80]
    bg-[#1E1B17] p-6 sm:min-h-[396px] sm:p-7
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:border-[2px]
    hover:border-[#E9A60F]
    hover:shadow-[0_15px_45px_rgba(233,166,15,0.15),0_0_70px_rgba(233,166,15,0.10)]
  "
>
          <div className="relative z-10 flex min-w-0 flex-1 flex-col">
           <p
  className="
    font-bebas
    text-[170px]
    leading-none
    text-transparent
    [-webkit-text-stroke:2px_#E9A60F80]
    transition-all duration-700 ease-in-out
    group-hover:[-webkit-text-stroke:2px_#E9A60F]
    group-hover:[background-image:linear-gradient(rgba(233,166,15,0.2),rgba(233,166,15,0.2))]
    group-hover:[-webkit-background-clip:text]
    group-hover:bg-clip-text
  "
>
  07
</p>
            
            
            
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto]">

  {/* LEFT CONTENT */}
  <div>
    <p className="mt-5 font-inter text-[10px] font-bold uppercase tracking-[0.12em] text-[#E9A60F]">
      Categories
    </p>

    <h2 className="mt-1 font-bebas text-[34px] leading-none text-white sm:text-[40px]">
      Commercial Elevators
    </h2>

    <ul className="mt-5 flex max-w-[390px] flex-wrap gap-2">
      {commercialCategories.map((category) => (
        <li key={category}>
          <Link
            to={commercialRoute}
            className="inline-flex min-h-7 items-center rounded-full border border-[#E9A60F] px-3 py-1 font-inter text-[10px] leading-tight text-white transition-colors duration-200 hover:bg-[#E9A60F] hover:text-[#141210] sm:text-[11px]"
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>

    <Link
      to={commercialRoute}
      className="mt-6 inline-flex min-h-[42px] w-fit items-center justify-center rounded-full border border-[#E9A60F] px-6 font-inter text-[12px] font-semibold text-[#E9A60F] transition-colors duration-200 hover:bg-[#E9A60F] hover:text-[#141210]"
    >
      Explore Commercial <span className="ml-1">→</span>
    </Link>
  </div>


  <div className="relative flex h-[190px] items-end justify-center gap-2 sm:w-[150px]">

  {elevatorLevels.map((elevator, index) => (
    <div
      key={index}
      className={`flex ${elevator.height} w-[42px] flex-col-reverse justify-between gap-[4px] rounded-t-[5px] border border-[#E9A60F] bg-[#17140F] p-[4px]`}
    >
      {Array.from({ length: elevator.floors }).map((_, floorIndex) => (
        <div
          key={floorIndex}
          className="elevator-light h-[12px] w-full shrink-0 rounded-[3px]"
         style={{
  animationDelay: `${-( (elevator.floors - 1 - floorIndex) * 0.22 + index * 0.35)}s`,
}}
        />
      ))}
    </div>
  ))}

</div>

 
</div>
           
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductPageSection2
