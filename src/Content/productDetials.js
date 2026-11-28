
import images from "../assets/Images";

export const products = {
  "signature-1101": {
    id: 1,
    slug: "signature-traction-1101",
    name: "Signature 1101",

    seo: {
      title: "Signature 1101 Home Elevator for Villas | NVANZ Elevators",

      description:
        "Discover the NVANZ Signature 1101 home elevator, designed for villas and duplexes with smooth operation, flexible cabin options and residential safety features.",

      canonical:
        "https://nvanzelevators.com/products/signature-traction-1101",

      robots: "index, follow, max-image-preview:large",

      focusKeyword: "Signature 1101 home elevator",

      secondaryKeywords: [
        "Residential home elevator",
        "Home elevator for villas",
        "Home elevator for duplexes",
        "Hydraulic home elevator",
        "Modern home elevator",
        "Residential lift system",
        "Luxury home elevators"
      ],

      openGraph: {
        type: "website",

        title:
          "Signature 1101 Home Elevator | NVANZ Elevators",

        description:
          "Discover the NVANZ Signature 1101 home elevator, designed for villas and duplexes with smooth operation and modern cabin options.",

        image:
          "https://nvanzelevators.com/assets/signature-1101-traction.webp",

        imageAlt:
          "NVANZ Signature 1101 residential home elevator"
      },

      twitter: {
        card: "summary_large_image",

        title:
          "Signature 1101 Home Elevator | NVANZ Elevators",

        description:
          "Explore the NVANZ Signature 1101 home elevator for villas and duplexes, featuring smooth operation and premium cabin choices.",

        image:
          "https://nvanzelevators.com/assets/signature-1101-traction.webp",

        imageAlt:
          "NVANZ Signature 1101 residential home elevator"
      },

      schema: {
        productName: "Signature 1101 Home Elevator",

        description:
          "The NVANZ Signature 1101 is a residential home elevator designed for villas, duplexes and multi-floor family residences, with flexible cabin and door configurations.",

        category: "Residential Home Elevator",

        brand: "NVANZ Elevators"
      }
    },


    hero: {
      title: "Signature 1101 Home Elevator for Villas and Duplexes",
      subtitle: "TRACTION · 1101",
      description:
        "The NVANZ Signature 1101 is a premium residential elevator for homeowners who want smooth and convenient travel between floors. It offers a capacity range of 250–630 kg, a choice of automatic or manual doors, and cabin finishes in stainless steel, glass or premium materials.",
      image: images?.SignatureProductImg,
      alt:"Signature Product Img",
      points:[
        "250–630 kg residential capacity",
        "Compact, low-noise power unit",
        "Overload protection and light curtain",
        "Emergency lowering and emergency communication, as engineered"
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.4 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "A HOME ELEVATOR DESIGNED AROUND YOUR PROPERTY",
      points:[
        "The Signature 1101 is designed for private homes, including villas, duplexes and multi-floor family residences. It uses a hydraulic drive, in which a hydraulic cylinder moves the cabin and a compact hydraulic power unit (HPU) controls the movement.",
        "It can be configured with automatic or manual doors and with stainless steel, glass or premium cabin options. The speed ranges from approximately 0.15 to 0.40 m/s, depending on the design.",
        "Please note that the pit depth, machine room arrangement and final design depend on your project. A site assessment is the best way to confirm what will work in your home."
      ]
    },

    features:{
        title:"KEY FEATURES AND BENEFITS OF SIGNATURE 1101 HOME ELEVATOR",
        cardDetails:[
            {
                img:images?.productFeaturesImg1,
                heading:"HYDRAULIC CYLINDER DRIVE",
                description:" A hydraulic cylinder moves the cabin in a direct or 2:1 configuration, as per the project design.",
                subDes:"Delivers a smooth, steady ride at residential speeds."
            },
            {
                img:images?.productFeaturesImg2,
                heading:"COMPACT LOW-NOISE POWER UNIT",
                description:"A compact power unit, with a remote arrangement where feasible.",
                subDes:"Offers flexibility in deciding where the equipment is placed."
            },
            {
                img:images?.productFeaturesImg3,
                heading:" Variable-speed Control",
                description:"A premium variable-speed pump and a VVVF / hydraulic controller.",
                subDes:"Ensures smooth starts and stops of the cabin."
            },
            {
                img:images?.productFeaturesImg4,
                heading:"Safety and emergency provisions",
                description:"Overload protection, a light curtain, emergency communication and ARD / emergency lowering, as per the project design.",
                subDes:"Gives families added confidence during daily use and unexpected events."
            },
            {
                img:images?.productFeaturesImg5,
                heading:"Cabin and Door Choices",
                description:"Automatic or manual doors, with cabin options in stainless steel, glass or premium finishes.",
                subDes:"Allows the elevator to match your home’s interior."
            },
            {
                img:images?.productFeaturesImg6,
                heading:"Remote Diagnostics",
                description:"Remote monitoring of the elevator’s condition (optional or included in the premium package).",
                subDes:"Helps the service team identify issues early. "
            },
            
        ]
    },

    

    specifications: {
        title:"Signature 1101 Technical Specifications",
        desc:"Final suitability, dimensions and installation requirements must be verified for your property by the NVANZ technical team.",
        details:[
            {
                heading:"DRIVE",
                point:"Hydraulic"
            },
             {
                heading:"PUMP",
                point:"Premium variable-speed pump / suitable hydraulic unit "
            },
             {
                heading:"CAPACITY",
                point:"250–630 kg (residential) "
            },
             {
                heading:"SPEED",
                point:"Approx. 0.15–0.40 m/s, depending on design"
            },
             {
                heading:"CONFIGURATION",
                point:"Direct / 2:1, as per the project design "
            },
             {
                heading:"CYLINDER",
                point:"Hydraulic cylinder"
            },
             {
                heading:"POWER UNIT",
                point:"Compact low-noise HPU"
            },
             {
                heading:"CONTROLLER",
                point:"VVVF / hydraulic controller"
            },
             {
                heading:"DOOR",
                point:"Automatic / manual"
            },
             {
                heading:"CABIN",
                point:"Stainless steel / glass / premium finish"
            },
             {
                heading:"PIT",
                point:"Project-dependent"
            },
             {
                heading:"MACHINE ROOM",
                point:"Compact HPU / remote arrangement where feasible"
            },
             {
                heading:"ARD / EMERGENCY LOWERING",
                point:"Yes, as per the project design "
            },
            {
                heading:"EMERGENCY COMMUNICATION",
                point:"Yes"
            },
            {
                heading:"OVERLOAD",
                point:"Yes"
            },
            {
                heading:"LIGHT CURTAIN",
                point:"Yes"
            },
            {
                heading:"REMOTE DIAGNOSTICS",
                point:"Optional / included in the premium package "
            },


        ]
    },

    isRightForHome:{
        heading:"Is the Signature 1101 Right for Your Home?",
        cardDetails:[
            {
                title:"Projects It Suits",
                description:"It is intended for residential use in villas, duplexes and multi-floor homes, in both new constructions and renovation projects. ",
                points:[
                   
                ]
            },
             {
                title:"Space Planning",
                description:"",
                points:[
                     "Pit depth (project-dependent)",
                    "Placement of the power unit",
                    "Cabin size, shaft size and number of floors",
                    "Door type and landing area"
                ]
            },
            {
                title:"Accessibility",
                description:"If someone at home uses a wheelchair or has limited mobility, please inform us early. The internal cabin size, door opening width, landing space and control height must all be checked.",
                points:[]
            },
            {
                title:"Questions to Ask the Technical Team",
                description:"",
                points:[
                    "How many floors will the elevator serve?",
                    "Where can the pit and power unit be placed?",
                    " Is the home new construction or an existing building?",
                    "Which door and cabin options suit the interior design?",
                    "What service and support are available after installation?"
                ]
            },
            
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ for Your Home Elevator?",
        description:"",
        points:[
            "A home elevator is a long-term addition to your house, so the provider is as important as the product. A good partner studies your property first, recommends a suitable model and explains technical requirements, such as the pit and machine space, in simple language.",
            "NVANZ offers modern residential elevators designed for homes of every size and style. Our team helps you compare home elevator options, plan the elevator layout with your architect or builder, and understand your choices before you decide."
        ]
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:images?.SignatureCompact,
                alt:'SignatureCompact'
            },
            {
                title:"Entrance and door",
                img:images?.SignatureControl,
                alt:"SignatureControl"
            },
            {
                title:"Control panel",
                img:images?.SignatureEntranceDoor,
                alt:"SignatureEntranceDoor"
            },
            {
                title:"Compact power unit",
                img:images?.SignatureInstalled,
                alt:'SignatureInstalled'
            },
            {
                title:"Installed home project",
                img:images?.SignatureFullCabin,
                alt:'SignatureFullCabin'
            }

        ]

    },
    faq:{
        heading:"Frequently Asked Questions",
        questionsAndAns:[
        {
            question:" How does a hydraulic home elevator move?",
            ans:"A hydraulic cylinder moves the cabin using fluid pressure from a compact power unit."
        },
        {
            question:"Does it need a machine room?",
            ans:"The power unit (HPU) is compact, and a remote arrangement is possible where feasible. The right setup is decided after a site visit"
        },
        {
            question:"How deep should the pit be?",
            ans:"Pit depth is project-dependent. The technical team will confirm the figure for your design. "
        },
        {
            question:"What happens during a power cut?",
            ans:"The model lists ARD / emergency lowering, as engineered. Exact behaviour should be confirmed by the technical team."
        },
         {
            question:"What safety features does it have?",
            ans:"The supplied specifications list overload protection, a light curtain, emergency lowering and emergency communication."
        },
        {
            question:"Can a wheelchair user use this elevator?",
            ans:"This depends on cabin size, door width and landing space. Please discuss your needs with NVANZ so they can be checked."
        },
        {
            question:"Can it be installed in an existing house?",
            ans:"It may be possible, depending on available space and structure. A site assessment is needed to say for sure."
        },
         {
            question:"What door and cabin options are available?",
            ans:"Doors can be automatic or manual. Cabins are listed as SS, glass or premium."
        },
    ],
    },
    
    contact:{
        heading:"Planning a Home Elevator? Let’s Review Your Layout",
        description:"Share your floor plan, the number of floors and your daily needs with NVANZ. Our team will help you check whether the Signature 1101 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

   "prestigeMrlRopeHome": {
    id: 2,
    slug: "prestige-mrl-rope-elevator-1110",
    name: "Prestige Mrl Rope Home",

      seo: {
      title: "Prestige MRL Rope Modern Elevator 1110 | NVANZ Elevators",

      description:
        "Explore the Prestige MRL Home Elevator (1110) by NVANZ. Discover rope traction technology, space-saving design and residential lift solutions for modern homes.",

      canonical:
        "https://nvanzelevators.com/products/prestige-mrl-rope-elevator-1110",

      robots: "index, follow, max-image-preview:large",

      focusKeyword: "MRL Home Elevator",

      secondaryKeywords: [
        "MRL Rope Elevator",
        "Rope Traction Home Elevator",
        "Machine Room Less Home Lift",
        "Residential MRL Elevator",
        "MRL Traction Elevator",
        "Rope Driven Home Elevator",
        "Home Elevator with Rope Drive"
      ],

      openGraph: {
        type: "website",

        title:
          "Prestige MRL Home Elevator | Rope Traction Lift – NVANZ",

        description:
          "Explore the Prestige MRL Home Elevator (1110) by NVANZ. Discover rope traction technology, space-saving design and residential lift solutions for modern homes.",

        image:
          "https://nvanzelevators.com/assets/prestige-mrl-rope-home-elevator-1110.webp",

        imageAlt:
          "Prestige MRL Rope Home Elevator model 1110 by NVANZ Elevators"
      },

      twitter: {
        card: "summary_large_image",

        title:
          "Prestige MRL Home Elevator | Rope Traction Lift – NVANZ",

        description:
          "Explore the Prestige MRL Home Elevator (1110) by NVANZ. Discover rope traction technology, space-saving design and residential lift solutions for modern homes",

        image:
          "https://nvanzelevators.com/assets/prestige-mrl-rope-home-elevator-1110.webp",

        imageAlt:
          "Prestige MRL Rope Home Elevator model 1110 by NVANZ Elevators"
      },

      schema: {
        productName: "Prestige MRL Rope Home Elevator (1110)",

        description:
          "Explore the Prestige MRL Rope Home Elevator (1110) by NVANZ Elevators, a residential elevator featuring machine room-less rope traction technology.",

        category: "Residential Home Elevator",
         model: "1110",

        brand: "NVANZ Elevators"
      }
    },

    hero: {
      title: "Prestige MRL Rope Home Elevator (1110) – Smooth, Safe and Space-Saving",
      subtitle: "MRL · 1110",
      description:
        "The Prestige 1110 is a machine-room-less (MRL) rope elevator from NVANZ Elevators. It is powered by a gearless permanent magnet motor and an integrated VVVF controller. Designed for homeowners who want a smooth, modern elevator, it suits villas, duplexes and renovation projects. It is available in capacities from 320 kg to 800 kg.",
      image: images?.PrestigeMrlProductRope,
      alt:"Prestige Mrl Rope Home",
      points:[
        "Gearless PMSM machine with MRL configuration",
        "Capacity options: 320 / 450 / 630 / 800 kg",
        "Speed range: 0.63 to 1.0 m/s",
        "ARD, overload protection and a full-height light curtain",
        "Remote monitoring and GSM/4G emergency communication"
        
      ]

    },
    section2:{

        speed:"0.63 m/s → 1.0 m/s",
        capacity:"320 kg → 800 kg"

    },

    overview: {
      title: "A Rope-Driven Home Elevator Without a Separate Machine Room",
      points:[
        "The Prestige 1110 is a machine-room-less (MRL) elevator. An MRL design does not require a separate machine room above the shaft, which can make planning easier for a home.",
        "The elevator car is lifted by steel wire ropes with 2:1 roping and driven by a gearless permanent magnet motor. An integrated VVVF controller manages the motor speed and movement.",
        "The cabin is available in SS 304, SS 316 or glass finishes. Automatic doors are available in telescopic or centre-opening styles.",
        "Before choosing this model, please confirm three things with the NVANZ team: your available shaft space, the top and pit clearances, and the capacity you need."
     
      ]
    },

    features:{
        title:"What the Prestige 1110 Offers for Everyday Home Use",
        
        cardDetails:[
            {
                img:"",
                heading:"MRL layout",
                description:"Designed without a separate machine room.",
                subDes:"Less space is taken up by equipment, which can help in both new villas and renovation projects."
            },
             {
                img:"",
                heading:"Gearless PMSM drive",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"Fewer moving parts in the drive system and smoother operation."
            },
             {
                img:"",
                heading:"Steel wire rope with 2:1 roping",
                description:"The car is suspended on steel ropes over a traction sheave engineered to suit the rope and motor.",
                subDes:"A proven rope-driven design with a choice of capacities from 320 kg to 800 kg."
            },
             {
                img:"",
                heading:"VVVF controller and encoder",
                description:"The controller regulates the motor speed, while the high-resolution encoder reports the exact cabin position.",
                subDes:"Smoother starts and stops, and accurate floor levelling."
            },
             {
                img:"",
                heading:"Safety and protection",
                description:"Includes ARD, overload protection, a full-height light curtain on the door and, where applicable, a dual independent brake system.",
                subDes:"Adds multiple layers of protection for every family member, including children and older adults."
            },
             {
                img:"",
                heading:"Remote monitoring and smart access",
                description:"Includes remote monitoring and GSM/4G emergency communication. PIN, RFID or biometric access is available as an option.",
                subDes:"Allows status checks, emergency contact and optional control over who can use the elevator."
            },
        ]
    },

    

    specifications: {
        title:"Prestige 1110 Technical Specifications",
       
        details:[
            {
                heading:"MACHINE",
                point:"Gearless PMSM"
            },
            {
                heading:"SUSPENSION",
                point:"Steel wire rope"
            },
            {
                heading:"CONFIGURATION",
                point:"MRL"
            },
            {
                heading:"ROPING",
                point:"2:1"
            },
            {
                heading:"CAPACITY",
                point:"320 / 450 / 630 / 800 kg"
            },
            {
                heading:"SPEED",
                point:"0.63 – 1.0 m/s"
            },
            {
                heading:"MOTOR",
                point:"Gearless permanent magnet"
            },
            {
                heading:"TRACTION SHEAVE",
                point:"Engineered to suit the rope and motor "
            },
            {
                heading:"CONTROLLER",
                point:"Integrated VVVF"
            },
            {
                heading:"ENCODER",
                point:"High-resolution"
            },
            {
                heading:"BRAKE",
                point:"Dual independent brake system(where applicable) "
            },
            {
                heading:"CAR FRAME",
                point:"Heavy-duty fabricated steel"
            },
            {
                heading:"GUIDE RAILS",
                point:"T-section"
            },
            {
                heading:"DOOR",
                point:"Automatic telescopic / centre opening"
            },
            {
                heading:"CABIN",
                point:"SS 304 / 316 / glass"
            },
            {
                heading:"ARD",
                point:"Yes"
            },
            {
                heading:"OVERLOAD",
                point:"Yes"
            },
            {
                heading:"LIGHT CURTAIN",
                point:"Full height"
            },
            {
                heading:"REMOTE MONITORING",
                point:"Yes"
            },
            {
                heading:"EMERGENCY COMMUNICATION",
                point:"GSM/4G"
            },
            {
                heading:"SMART ACCESS",
                point:"Optional PIN, RFID or biometric access "
            }

        ],
        desc:"Final suitability, dimensions and installation requirements must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is the Prestige 1110 Right for Your Home?",
        cardDetails:[
            {
                title:"Where the Prestige 1110 Fits Best",
                description:"It suits new villas, duplexes and renovation projects where a rope-driven MRL elevator can be planned.",
                points:[]
            },
             {
                title:"Space and Layout Planning",
                description:"",
                points:[
                    "Shaft size, pit depth and top clearance must be confirmed through a site check.",
                    "Choose the capacity (320 kg to 800 kg) based on the number of people who will use it.",
                    "Plan the cabin finish and door style early in the project.",
                    "For renovation projects, the building structure must be assessed first."
                ]
            },
             {
                title:"Accessibility",
                description:"Accessibility depends on the cabin size, door opening width and entrance layout. NVANZ will confirm these details for each project before confirming suitability for wheelchair use.",
                points:[]
            },
             {
                title:"Questions to Ask Before Installation",
                description:"",
                points:[
                    "Which capacity and cabin size suit my family?",
                    "What shaft dimensions, pit depth and overhead clearance are needed?",
                    "Which door style suits my entrance?",
                    "What power supply is required?",
                    "What does after-sales support include?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ Elevators?",
        description:"",
        points:[
            "A good elevator is more than a product. It starts with understanding your property, your family’s needs and your building plan.",
            "NVANZ helps you compare models, plan technical requirements and make an informed decision. The NVANZ team reviews your layout before recommending a model, so you know what is required before work begins.",
            "When choosing an elevator provider, ask clear questions about site assessment, the installation process and after-sales support. NVANZ is happy to discuss these openly. "
        ]
    },
     productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:images?.PrestigeFullCabin,
                alt:'PrestigeFullCabin',
            },
            {
                title:"Automatic door and entrance",
                img:images?.PrestigeAutomatic,
                alt:'PrestigeAutomatic',
            },
            {
                title:"Machine and belt / sheave detail",
                img:images?.PrestigeMachine,
                alt:'PrestigeMachine',
            },
            {
                title:"Control panel close-up",
                img:images?.PrestigeControlPannel,
                alt:'PrestigeControlPannel',
            },
            {
                title:"Installed project",
                img:images?.PrestigeInstalled,
                alt:'PrestigeInstalled',
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
            {
            question:"Does an MRL elevator need a machine room?",
            ans:"MRL stands for machine-room-less. In general, it does not need a separate machine room. It still needs a shaft with correct pit and overhead clearances, which NVANZ confirms for your property."
        },
        {
            question:'What does "gearless" mean?',
            ans:"The motor drives the elevator directly without a gearbox. This is the design used in the Prestige 1110 (gearless PMSM)."
        },
        {
            question:"Which capacity should I choose?",
            ans:"The model comes in 320, 450, 630 and 800 kg. Choose based on how many people ride together and whether you want to carry items. The technical team can guide you."
        },
        {
            question:"Is the Prestige 1110 wheelchair accessible?",
            ans:"This depends on the cabin size and door width for your project. Please discuss your needs with NVANZ so the team can confirm what is possible."
        },
        {
            question:"What happens during a power failure?",
            ans:"The elevator has an ARD (Automatic Rescue Device). The NVANZ team can explain how it works for your installation."
        },
{
            question:"Can I call for help from inside the cabin?",
            ans:"Yes. The elevator includes GSM/4G emergency communication. Remote monitoring is also included."
        },
        {
            question:"Can I control who uses the elevator?",
            ans:"PIN, RFID or biometric access is optional. Ask NVANZ if you want it included."
        },
         {
            question:"Can this elevator be installed in an existing home?",
            ans:"It may be possible, depending on available space and structure. A site assessment is needed."
        },
        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let’s Find the Right Fit for Your Property ",
        description:"Share your floor layout, family requirements and expected capacity. The NVANZ team will help you check whether the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "prestigeMrlFlatBelt": {
   id: 3,
    slug: "prestige-mrl-flat-belt-elevator-1110",
    name: "Prestige Mrl Flat Belt",
      seo: {
      title: "Prestige MRL Flat Belt Elevator 1110 for Homes | NVANZ",

      description:
        "Explore the Prestige MRL Home Elevator (1110) by NVANZ. Discover rope traction technology, space-saving design and residential lift solutions for modern homes.",

      canonical:
        "https://nvanzelevators.com/products/prestige-mrl-flat-belt-elevator-1110",

      robots: "index, follow, max-image-preview:large",

      focusKeyword: "Prestige MRL flat belt home elevator ",

      secondaryKeywords: [
        "MRL flat belt elevator",
        "Flat belt home elevator",
        "Machine room less home elevator",
        "Residential flat belt elevator",
        "Flat belt home lift",
        "Premium home elevator",
        "Home Elevator with Rope Drive"
      ],

      openGraph: {
        type: "website",

        title:
          "Prestige MRL Flat Belt Home Elevator 1110 | NVANZ",

        description:
          "Explore NVANZ Prestige MRL Flat Belt Home Elevator 1110, featuring flat belt technology and a space-efficient machine room-less design.",

        image:
          "https://nvanzelevators.com/assets/prestige-mrl-rope-home-elevator-1110.webp",

        imageAlt:
          "Prestige MRL Flat Belt Home Elevator 1110 by NVANZ"
      },

      twitter: {
        card: "summary_large_image",

        title:
          "Prestige MRL Flat Belt Home Elevator 1110 | NVANZ",

        description:
          "Discover NVANZ Prestige MRL Flat Belt Home Elevator 1110 with flat belt technology and a space-efficient MRL design",

        image:
          "https://nvanzelevators.com/assets/prestige-mrl-rope-home-elevator-1110.webp",

        imageAlt:
          "Prestige MRL Flat Belt Home Elevator 1110 by NVANZ"
      },

      schema: {
        productName: "Prestige MRL Flat Belt Home Elevator 1110",

        description:
          "Prestige MRL Flat Belt Home Elevator 1110 by NVANZ, designed for residential vertical mobility with machine room-less flat belt technology.",
        category: "Residential Home Elevator",
         model: "1110",

        brand: "NVANZ Elevators"
      }
    },
    hero: {
      title: "Prestige MRL Flat Belt Home Elevator 1110 | NVANZ Elevators",
      subtitle: "MRL · 1110",
      description:
        "The Prestige 1110 is a machine-room-less (MRL) home elevator from NVANZ Elevators. It uses a compact gearless motor and a flat steel/PU belt to move the cabin smoothly and quietly. It is equipped with an automatic door and smart monitoring, and it is well suited to villas, duplexes, independent houses and renovated homes.",
      image: images?.PrestigeMrlFlatProduct,
      alt:"Prestige Mrl Flat Belt",
      points:[
        "MRL design, with no separate machine room",
        "Gearless PMSM drive with VVVF control",
        "Flat steel/PU belt suspension",
        "Low-noise architecture",
        "Remote diagnostics and smart monitoring"
        
      ]

    },
    section2:{

        speed:"0.63 m/s → 1.6 m/s",
        capacity:"320 kg → 1050 kg"

    },

    overview: {
      title: "A Machine-Room-Less Elevator Built Around a Flat Belt",
      points:[
     "The Prestige 1110 is a machine-room-less (MRL) elevator, which means it is designed without a separate machine room. This is especially useful in homes where space is limited.",
     "Instead of round ropes, it uses a flat steel/PU belt that runs over a small-diameter belt sheave. This allows the use of a compact gearless machine. The permanent magnet synchronous motor (PMSM) is controlled by a variable voltage variable frequency (VVVF) drive and a high-resolution encoder.",
     "The cabin is available in premium stainless steel (SS) or glass finishes and is fitted with an automatic door. The elevator also includes an automatic rescue device (ARD), remote diagnostics and smart monitoring.",
     "Before choosing any elevator, a homeowner should have the shaft size, travel height and building structure checked. The Prestige 1110 is no exception."
      ]
    },

    features:{
        title:"What Sets the Prestige 1110 Apart",
        cardDetails:[
            {
                img:"",
                heading:"MRL layout",
                description:"Designed without a separate machine room.",
                subDes:"Less space is taken up by equipment, which can be helpful in new villas and renovation projects."
            },
            {
                img:"",
                heading:"Gearless drive with smooth control",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"The drive has fewer moving parts and operates smoothly."
            },
            {
                img:"",
                heading:"Flat steel/PU belt",
                description:"A flat belt runs over a small-diameter sheave, which allows the machine to be compact.",
                subDes:"A smaller machine supports the MRL layout."
            },
            {
                img:"",
                heading:"VVVF controller and encoder",
                description:"The controller adjusts the motor speed, while the high-resolution encoder reports the exact position of the cabin.",
                subDes:"Smoother starts and stops with accurate floor levelling."
            },
            {
                img:"",
                heading:"Automatic door, ARD and emergency communication",
                description:"An automatic door, an automatic rescue device (ARD) and an emergency communication system to contact help from inside the cabin.",
                subDes:"Greater comfort for daily use and a clear rescue plan in case of a power failure."
            },
            {
                img:"",
                heading:"Remote monitoring",
                description:"The status of the elevator can be checked remotely.",
                subDes:"Easier follow-up and servicing. Service features and response times depend on the support plan"
            },
        ]
    },

    

    specifications: {
        title:"Technical Specifications",
        details:[
            {
                heading:"Drive",
                point:"Gearless PMSM"
            },
             {
                heading:"Suspension",
                point:"Flat steel/PU belt"
            },
             {
                heading:"Configuration",
                point:"Machine-room-less (MRL) "
            },
             {
                heading:"Roping",
                point:"2:1"
            },
             {
                heading:"Capacity",
                point:"320–1050 kg"
            },
             {
                heading:"Speed",
                point:"0.63–1.60 m/s"
            },
             {
                heading:"Traction",
                point:"Small-diameter belt sheave"
            },
            {
                heading:"Controller",
                point:"VVVF (variable voltage variable frequency)"
            },{
                heading:"Encoder",
                point:"High-resolution"
            },{
                heading:"Belt monitoring",
                point:"Recommended"
            },{
                heading:"Brake",
                point:"Dual brake system, where applicable "
            },{
                heading:"Noise",
                point:"Low-noise design"
            },{
                heading:"Cabin",
                point:"Premium stainless steel / glass "
            },{
                heading:"Door",
                point:"Automatic"
            },{
                heading:"ARD",
                point:"Yes"
            },
            {
                heading:"Remote diagnostics",
                point:"Yes"
            },
            {
                heading:"Smart monitoring",
                point:"Yes"
            },

        ],
         desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is the Prestige 1110 Right for Your Home?",
        cardDetails:[
            {
                title:"Where It May Be Suitable ",
                description:"The MRL layout may suit new villas, duplexes and renovation projects where a separate machine room is not wanted. A site assessment decides if it fits.",
                points:[]
            },
              {
                title:"Space and Layout Points to Check",
                description:"",
                points:[
                    "Shaft size, travel height and number of floors",
                    "Pit depth and overhead height",
                    'Entrance location on each floor',
                    "Structural support for the elevator"

                ]
            },
              {
                title:"Accessibility",
                description:'This model is listed as wheelchair accessible. Accessibility must be checked against the cabin size, door width and entrance space for each home. Please confirm these details before planning for wheelchair use.',
                points:[]
            },
              {
                title:"Questions to Ask the Technical Team",
                description:"",
                points:[
                    "Which capacities and speeds are  offered for homes?",
                    "What cabin and door sizes are available?",
                    "What does a site survey include?",
                    "Is belt monitoring included?",
                    "What capacities and speeds are "
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Choosing the Right Partner for Your Home Elevator ",
        description:"",
        points:[
            "A good elevator provider starts with your property, not the product. They should assess your space, explain the options clearly and be honest about limitations.",
            "NVANZ Elevators offers the Prestige 1110, a modern residential elevator designed for comfortable and safe home use. Our team helps you understand the features, assess your space and layout, and explain the technical requirements, so that you can choose the right home elevator with confidence.",
            "For installation and after-sales support, NVANZ can explain what is included in your project."
        ]
    },
//    productGallery:{
//         heading:"Product Gallery",
//         images:[
//             {
//                 title:"Full cabin interior",
                
//             },
//             {
//                 title:"Automatic door and entrance",
                
//             },
//             {
//                 title:"Control panel close-up",
                
//             },
//             {
//                 title:"Machine and belt / sheave detail",
                
//             },
//             {
//                 title:"Installed project (only if a real project exists)",
                
//             }

//         ]

//     },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"What is an MRL flat belt elevator?",
            ans:"It is an elevator with no separate machine room. It uses a flat belt instead of round ropes, running over a small sheave. This lets the machine stay compact."
        },
        {
            question:"Is the Prestige 1110 suitable for my villa?",
            ans:"It may be, depending on shaft size, travel height and structure. A site assessment is needed."
        },
{
            question:"What capacity and speed will my home elevator have?",
            ans:"The product line lists 320–1050 kg and 0.63–1.60 m/s. The exact values for a home need to be confirmed."
        },
        {
            question:"Is it wheelchair accessible?",
            ans:"Accessibility depends on cabin size, door width and entrance space, which are not in the supplied specifications. Please confirm these with the technical team."
        },
         {
            question:"What happens in a power cut?",
            ans:"The elevator has an ARD (automatic rescue device). How it works for this model, and for how long, must be confirmed."
        },
         {
            question:"Is it quiet?",
            ans:"It is listed with a low-noise architecture and a gearless drive. No decibel values have been supplied."
        },
         {
            question:"What power supply does it need?",
            ans:"This is not in the supplied specifications."
        },
         {
            question:"How is it maintained?",
            ans:"Remote diagnostics and smart monitoring are listed. The service plan and schedule should be confirmed with NVANZ."
        },

        ]
    },
    contact:{
        heading:" Planning a Home Elevator? Let’s Find What Fits Your Property",
        description:"Share your property layout and requirements with NVANZ. Our team will help you understand whether the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },


  "prestigeMrlGroovedBelt": {
    id: 4,
    slug: "prestige-mrl-grooved-belt-elevator-1110",
    name: "Prestige Mrl Grooved Belt",

    hero: {
      title: "Prestige MRL Grooved Belt Elevator (1110) for Homes",
      subtitle: "MRL · 1110",
      description:
        "The Prestige MRL Grooved Belt Elevator (1110) is a machine-room-less (MRL) home elevator  with a gearless PMSM drive and a steel-reinforced coated belt. It is designed for new villas, duplexes and renovation projects where a separate machine room is not practical. It is available for loads from 320 kg to 1000 kg.",
      image: images?.PrestigeMRLGroovedProduct,
      alt:"Prestige MRL Grooved Product",
      points:[
        "Machine-room-less (MRL) design",
        "Gearless PMSM drive",
        "Capacity from 320 kg to 1000 kg ",
        "Speed from 0.63 m/s to 1.60 m/s ",
        "Automatic door and automatic rescue device (ARD) "
        
      ]

    },
    section2:{

        speed:"0.63 m/s → 1.6 m/s",
        capacity:"320 kg → 1000 kg"

    },

    overview: {
      title: "A Compact Machine-Room-Less Elevator Built on Belt Technology ",
      points:[
        "The Prestige MRL Grooved Belt Elevator (1110) is a machine-room-less elevator. The drive machine is installed inside the shaft, so a separate machine room is not required. It uses a gearless PMSM machine, a compact belt sheave and a steel-reinforced coated grooved belt, as engineered.",
        "It is intended for residential use and can suit modern villas, duplexes and renovated homes that need reliable movement between floors.",
        "Please note that shaft size, pit depth, headroom and door position depend on your property. The NVANZ technical team will confirm these after a site assessment. "
     
      ]
    },

    features:{
        title:"KEY FEATURES AND BENEFITS OF THE PRESTIGE MRL ELEVATOR",
        cardDetails:[
            {
                img:"",
                heading:"Machine-Room-Less (MRL) Layout",
                description:"Designed without a separate machine room.",
                subDes:"Benefit: Less space is used for equipment, which can help in both new villas and renovation projects."
            },
             {
                img:"",
                heading:" Gearless PMSM Drive ",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"Benefit: The drive has fewer moving parts and operates smoothly."
            },
             {
                img:"",
                heading:"Steel-Reinforced Coated Belt ",
                description:"A belt with steel reinforcement inside a protective coating. The system includes belt monitoring.",
                subDes:"The condition of the belt can be checked as part of regular care."
            },
             {
                img:"",
                heading:"VVVF Controller and Encoder ",
                description:"The controller adjusts the motor speed, and the high-resolution encoder reports the exact cabin position.",
                subDes:"Benefit: Smoother starts and stops, and accurate floor levelling. "
            },
             {
                img:"",
                heading:"Automatic Door, ARD and Emergency Communication ",
                description:"An automatic door, an automatic rescue device (ARD) and an emergency communication system to contact help from inside the cabin.",
                subDes:"Benefit: Greater comfort for daily use and a clear rescue plan if the power fails "
            },
             {
                img:"",
                heading:"Remote Monitoring",
                description:"The elevator’s status can be checked remotely.",
                subDes:"Benefit: Easier follow-up and service coordination. Service features and response times depend on the selected support plan."
            },
            
        ]
    },

    

    specifications: {
        title:"Prestige MRL Grooved Belt Elevator (1110) Technical Specifications",
        details:[
            {
                heading:"Drive",
                point:"Gearless PMSM"
            },
             {
                heading:"Suspension",
                point:"Steel-reinforced coated grooved belt, as engineered "
            },
             {
                heading:"Configuration",
                point:"Machine-room-less (MRL) "
            },
             {
                heading:"Roping",
                point:"2:1"
            },
             {
                heading:"Capacity",
                point:"320–1050 kg"
            },
             {
                heading:"Speed",
                point:"0.63–1.60 m/s"
            },
             {
                heading:"Traction",
                point:"Compact belt sheave"
             },{
                heading:"Belt monitoring",
                point:"Yes"
            },{
                heading:"ENCODER",
                point:"Absolute / high-resolution"
            },{
                heading:"CONTROLLER",
                point:"Compact MRL gearless"
            },{
                heading:"MACHINE",
                point:"Compact MRL gearless"
            },{
                heading:"CABIN",
                point:"Premium architectural"
            },{
                heading:"DOOR",
                point:"Automatic"
            },
            {
                heading:"ARD",
                point:"Yes"
            },
            {
                heading:"REMOTE MONITORING",
                point:"Yes"
            },
              {
                heading:"EMERGENCY COMMUNICATION",
                point:"Yes"
            },

        ],
        desc:"Final suitability, dimensions and installation requirements must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is the Prestige MRL Grooved Belt Elevator (1110) Right for Your Home?",
        cardDetails:[
            {
                title:"Where It May Fit",
                description:"It may suit new villas, duplexes and renovation projects where a separate machine room is not preferred. A site assessment will confirm whether it fits your property.",
                points:[]
            },
             {
                title:"What to plan",
                description:"",
                points:[
                    "Shaft size, pit depth and headroom.",
                    " Door position and landing space on each floor.",
                    " Capacity: The range of 320–1000 kg is wide. The right size depends on how many people will use the elevator and how they will use it.",
                    "Speed: The range of 0.63–1.60 m/s is wide, and most homes need only part of it."
                ]
            },
             {
                title:"Accessibility",
                description:"If someone in your home uses a wheelchair, please inform the NVANZ team early. Cabin size, door opening width and landing space determine whether a wheelchair can enter and turn comfortably. Wheelchair suitability is confirmed once the cabin and door sizes are finalised for your project.",
                points:[]
            },
             {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "What are the cabin and door sizes for the capacity I need?",
                    "What shaft size, pit depth and headroom does my home need?",
                    "What are the power supply and backup requirements?",

                    "What does the maintenance plan include?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"What to Look for in a Home Elevator Partner",
        points:[
            "A good elevator partner starts with your property, not the product. They check your layout, explain the options in plain language and tell you clearly what your home needs.",
            'At NVANZ Elevators, we help you choose a model that matches your requirements and coordinate the technical details with you.',
            "We aim to give you clear information so that you can make decisions with confidence."
        ],
        description:""
    },
    // productGallery:{
    //     heading:"Product Gallery",
    //     images:[
    //         {
    //             title:"Full cabin interior",
    //             img:""
    //         },
    //         {
    //             title:"Automatic door and entrance",
    //             img:""
    //         },
    //         {
    //             title:"Control panel close-up",
    //             img:""
    //         },
    //         {
    //             title:"Machine and belt / sheave detail",
    //             img:""
    //         },
    //         {
    //             title:"Installed project (only if a real project exists)",
    //             img:""
    //         }

    //     ]

    // },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:'What does "machine-room-less" mean? ',
            ans:"Machine-room-less means the drive machine is installed inside the elevator shaft, so a separate machine room is not required."
        },
        {
            question:"How is a belt different from a steel rope?",
            ans:"A steel rope is a round wire cable. This elevator uses a steel-reinforced coated grooved belt that runs over a compact belt sheave. "
        },
{
            question:'What does "belt monitoring" do?',
            ans:"Belt monitoring allows the condition of the belt to be checked as part of regular maintenance."
        },
        {
            question:"What happens during a power failure?",
            ans:" The elevator includes an automatic rescue device (ARD) and an emergency communication system. The NVANZ team can explain the complete rescue and backup plan for your project."
        },
        {
            question:"Can I choose the capacity?",
            ans:" Yes. Capacity is available from 320 kg to 1000 kg. The right choice depends on how many people use the elevator and how they use it."
        },
         {
            question:"What power supply does it need?",
            ans:" It can be, depending on cabin size, door width and landing space. Please share your requirements with the NVANZ team so that these can be confirmed for your home."
        },
         {
            question:"What power supply does it need?",
            ans:"Power requirements depend on the selected capacity, speed and project design. The NVANZ technical team will confirm them after a site assessment."
        },
         {
            question:"Can it be installed in an existing house?",
            ans:" It may be possible. As an MRL elevator, it does not need a separate machine room, which can help in renovation projects. A site assessment will confirm shaft, pit and headroom suitability."
        },
        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let’s Find the Right Fit for Your Property",
        description:"Share your property layout and requirements with NVANZ. Our team can help you understand whether the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },


  
  "groundHydraulicHome": {
    id: 5,
    slug: "ground-hydraulic-elevator-1506",
    name: "Ground Hydraulic Home",

    hero: {
      title: "Ground Hydraulic Home Elevator for Villas and Duplex Homes",
      subtitle: "HYDRAULIC · 1506",
      description:
        "The NVANZ Ground Hydraulic Elevator 1506 is a residential home elevator. A hydraulic cylinder moves the cabin, and a compact, low-noise power unit drives the system. With a capacity range of 250–630 kg, it suits homeowners who are planning a new villa, a duplex home or a renovation ",
       image: images?.GroundHydraulicProduct,
      alt:"Ground Hydraulic Home",
      points:[
        "Hydraulic drive with compact low-noise power unit",
        "Residential capacity range of 250–630 kg",
        "Overload protection and light curtain",
        "Emergency communication and emergency lowering (as engineered)"
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.4 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "How a Ground Hydraulic Home Elevator Works",
      points:[
     "This elevator uses a hydraulic cylinder to lift and lower the cabin. The power unit contains the pump and controls the movement. It is compact and low-noise, and it can be installed in a compact or remote arrangement, where feasible.",
     "It is designed for residential use, with speeds of about 0.15–0.40 m/s, depending on the design. Cabin options include stainless steel, glass or premium finishes.",
     "Before choosing an elevator, homeowners should note that the pit depth, machine space and final layout depend on the project. A site assessment by the technical team is required to confirm the best option for your home."
      ]
    },

    features:{
        title:"Features Built Around Everyday Home Use",
        cardDetails:[
            {
                img:"",
                heading:"Hydraulic Cylinder Drive",
                description:"A hydraulic cylinder moves the cabin. The configuration is direct or 2:1, as engineered. ",
                subDes:"A smooth, steady ride at residential speeds."
            },
            {
                img:"",
                heading:"Compact, Low-Noise Power Unit",
                description:"A compact power unit, with a remote arrangement where feasible.",
                subDes:"Flexibility in planning where the equipment is placed."
            },
            {
                img:"",
                heading:"Variable-Speed Control",
                description:"A premium variable-speed pump with a VVVF / hydraulic controller.",
                subDes:"Helps control how the cabin starts and stops."
            },
            {
                img:"",
                heading:"Safety and Emergency Provisions",
                description:"Overload protection, a light curtain, emergency communication and ARD (emergency lowering), as engineered.",
                subDes:"Added confidence during daily use and unexpected events."
            },
            {
                img:"",
                heading:"Cabin and Door Choices",
                description:"Automatic or manual doors, with a cabin in stainless steel, glass or premium finish.",
                subDes:"Lets the elevator match your home’s interior."
            },
            {
                img:"",
                heading:"Remote Diagnostics",
                description:"Remote checking of the elevator’s condition (optional, or included in the premium package).",
                subDes:"Helps the service team identify issues early."
            },
        ]
    },

    

    specifications: {
        title:"Technical Specifications",
        details:[
            {
                heading:"Drive",
                point:"Hydraulic"
            },
             {
                heading:"Pump",
                point:"Premium variable-speed / suitable hydraulic unit"
            },
             {
                heading:"Capacity",
                point:"250–630 kg residential"
            },
             {
                heading:"Speed",
                point:"Approximately 0.15–0.40 m/s depending on design"
            },
             {
                heading:"Configuration",
                point:"Direct / 2:1 as engineered"
            },
             {
                heading:"Cylinder",
                point:"Hydraulic cylinder"
            },
             {
                heading:"Power unit",
                point:"Compact, low-noise hydraulic power unit (HPU)"
             },{
                heading:"Controller",
                point:"VVVF / hydraulic controller"
            },{
                heading:"Door",
                point:"Automatic / manual"
            },{
                heading:"Cabin",
                point:"SS / glass / premium"
            },{
                heading:"Pit",
                point:"Project-dependent"
            },{
                heading:"Machine room",
                point:"Compact HPU / remote arrangement where feasible"
            },{
                heading:"ARD / emergency lowering",
                point:"Yes, as engineered"
            },
            {
                heading:"Emergency communication",
                point:"Yes"
            },
            {
                heading:"Overload",
                point:"Yes"
            },
              {
                heading:"Light curtain",
                point:"Yes"
            },
            {
                heading:"Remote diagnostics",
                point:"Optional / standard premium package"
            },

        ],
        desc:"Final suitability, dimensions and installation requirements must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is a Hydraulic Home Elevator Right for You?",
        cardDetails:[
            {
                title:"Where It Fits Best",
                description:"New villas, duplex homes and renovation projects where a home elevator is planned.",
                points:[]
            },
             {
                title:"Things to Plan Early",
                description:"",
                points:[
                    "Pit: depth depends on the project.",
                    "Equipment space: the power unit needs a compact or remote location.",
                    "Capacity: choose within 250–630 kg based on family use.",
                    "Door type: automatic or manual."
                ]
            },

             {
                title:"Wheelchair Accessibility",
                description:" Cabin size and clear door width depend on the project configuration. Please share your requirements with our technical team so that we can confirm a wheelchair-accessible fit for your home.",
                points:[]
            },
             {
                title:"Questions to Ask the Technical Team",
                description:"",
                points:[
                    "What pit depth is required for my building?",
                    "Where can the power unit be placed?",
                    "Which cabin and door sizes suit wheelchair use?",
                    "What does emergency lowering do during a power cut?",
                    "What maintenance and support will I receive?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ for Your Home Elevator?",
        subHeading:"Choosing a Residential Elevator Partner You Can Rely On",
        description:"",
        points:[
            "A home elevator is a long-term investment, so the right partner matters as much as the product. Choose a team that studies your property first, explains technical requirements in simple language, and plans the pit, equipment space and finishes with you.",
            "NVANZ offers modern residential elevators for homes across India. Our team helps you compare home elevator options and understand your project requirements before you decide.",
            
        ]
    },
    productGallery:{
        heading:"Product Gallery",
        subHeading:"See the Ground Hydraulic Elevator in Detail",
        images:[
            {
                title:"Full cabin interior",
                img:images?.GroundFullCabin,
                alt:"GroundFullCabin"
            },
            {
                title:"Entrance and door",
                 img:images?.GroundEntrance,
                alt:"GroundEntrance"
            },
            {
                title:"Control panel",
                 img:images?.GroundControl,
                alt:"GroundControl"
            },
            {
                title:"Compact power unit",
                 img:images?.GroundCompact,
                alt:"GroundCompact"
            },
            {
                title:"Installed home project (if available)",
                 img:images?.GroundInstalled,
                alt:"GroundInstalled"
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
      subHeading:"Common Questions About Hydraulic Home Elevators",
        questionsAndAns:[
           
        {
            question:"How does a hydraulic home elevator move?",
            ans:"A hydraulic cylinder lifts and lowers the cabin. A power unit with a pump controls the movement."
        },
        {
            question:"Does it need a pit?",
            ans:"Pit depth depends on the project. The technical team will confirm the requirement for your home after a site assessment."
        },
{
            question:"Where does the power unit go?",
            ans:"It can be placed in a compact arrangement or a remote arrangement, where feasible."
        },
        {
            question:"What happens during a power cut?",
            ans:"The elevator includes ARD (emergency lowering), as engineered. Please ask our technical team how it works for your configuration."
        },
        {
            question:"Is it wheelchair accessible?",
            ans:"Cabin size and door width depend on the configuration. Our technical team will assess whether it suits wheelchair use in your home."
        },
        {
            question:"Can I choose the door and cabin?",
            ans:"Yes. Doors can be automatic or manual, and the cabin is available in stainless steel, glass or premium finish."
        },
        {
            question:"Is remote diagnostics included?",
            ans:"Remote diagnostics is optional, or included in the premium package. Please confirm with our team."
        },


        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let's Check Your Layout",
        description:"Share your floor plan and requirements with NVANZ. Our team can help you understand whether this hydraulic model suits your home and what planning is required.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "nvanzPanorama-1805": {
    id: 6,
    slug: "panorama-circular-elevator-1805",
    name: "Nvanz Panorama-1805",

    hero: {
        
      title: "Panorama 1805",
      subtitle: "NVANZ Panorama 1805: Circular Panoramic Home Elevator",
      description:
        "A circular glass home elevator designed for homeowners who want it to be a visible part of their home. The Panorama 1805 suits new villas, duplexes and renovation projects, where the space and structure allow for a glass shaft.",
       image: images?.PanoramaProduct,
      alt:"Panorama Product",
      points:[
        "Circular, 360° panoramic cabin",
        "Laminated safety glass",
        "Remote monitoring and emergency communication",
        "Optional smart access (PIN, RFID or biometric)",
        " Capacity from 250 kg to 630 kg "
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.63 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "A Panoramic Glass Elevator Designed Around Your Home",
      points:[
     "The Panorama 1805 is a circular panoramic elevator built with laminated safety glass and a premium metal frame. It is designed for homes where the elevator will be visible from the living area, staircase or a double-height space.",
     "The drive can be MRL traction or hydraulic, depending on the project. Our technical team will recommend the right option after studying your building.",
     "A glass elevator works best when it is planned together with the architecture, rather than added later. Before you decide, consider where it will stand, what it will look out onto, and how the shaft will connect to each floor."
      ]
    },

    features:{
        title:"Key Features and Benefits of the Panorama 1805",
        cardDetails:[
            {
                img:"",
                heading:"Circular Panoramic Cabin",
                description:"A circular cabin with a glass enclosure.",
                subDes:"t offers open views from inside and a striking shape from outside."
            },
             {
                img:"",
                heading:"Laminated Safety Glass",
                description:"Layers of glass are bonded together.",
                subDes:" If the glass is damaged, it is designed to stay together instead of scattering."
            },
             {
                img:"",
                heading:" Premium Frame and Finishes",
                description:"An SS 304 or premium PVD frame, with marble, stone or premium flooring.",
                subDes:"The cabin can be finished to match your interior style."
            },
             {
                img:"",
                heading:" Architectural Lighting and Custom Ceiling",
                description:"Architectural LED lighting and a custom panoramic ceiling.",
                subDes:"Together, they give the cabin a refined and welcoming look."
            },
             {
                img:"",
                heading:"Touchscreen and Minimalist Panels",
                description:"A custom touchscreen COP (the panel inside the cabin) and a minimalist LOP (the call panel on each floor). ",
                subDes:"The controls are clean and suit a modern home."
            },
             {
                img:"",
                heading:"Optional Smart Access",
                description:"PIN, RFID or biometric access (optional).",
                subDes:"You decide who can use the elevator, which adds privacy and control."
            },
             {
                img:"",
                heading:"Remote Monitoring and Emergency Communication",
                description:"Both features are available on this model.",
                subDes:"They enable faster support and a way to call for help from inside the cabin."
            },
        ]
    },

    

    specifications: {
        title:"Technical Specifications",
        details:[
            {
                heading:"CONFIGURATION",
                point:"Circular / Panoramic"
            },
            {
                heading:"DRIVE",
                point:"MRL traction / hydraulic, (project-dependent) "
            },
            {
                heading:"SUSPENSION",
                point:"Rope / belt, (as per engineering)"
            },
            {
                heading:"CAPACITY",
                point:"250–630 kg"
            },
            {
                heading:"SPEED",
                point:"0.15–0.63 m/s, (depending on the drive) "
            },
            {
                heading:"CABIN",
                point:"Circular / panoramic"
            },
            {
                heading:"GLASS",
                point:"Laminated safety glass"
            },
            {
                heading:"FRAME",
                point:"SS 304 / premium PVD"
            },
            {
                heading:"DOOR",
                point:"Curved / automatic configuration where engineered"
            },
            {
                heading:"SHAFT",
                point:"Glass / architectural enclosure"
            },
            {
                heading:"LIGHTING",
                point:"Architectural LED"
            },
            {
                heading:"CEILING",
                point:"Custom panoramic ceiling"
            },
            {
                heading:"FLOORING",
                point:"Marble / stone / premium flooring"
            },
            {
                heading:"COP",
                point:"Custom touchscreen"
            },
            {
                heading:"LOP",
                point:"Minimalist premium LOP"
            },
            {
                heading:"SMART ACCESS",
                point:"PIN / RFID / biometric (optional)"
            },
            {
                heading:"REMOTE MONITORING",
                point:"Yes"
            },
            {
                heading:"EMERGENCY COMMUNICATION",
                point:"Yes"
            },
            {
                heading:"ARD / EMERGENCY LOWERING",
                point:"As per to drive configuration"
            },
            {
                heading:"SAFETY SYSTEM",
                point:"Complete certified safety system "
            },


        ],
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is a Circular Glass Elevator Right for Your Home?",
        cardDetails:[
            {
                title:"What to check before you decide",
                description:"Wheelchair access depends on the cabin size, clear door opening and landing space, all of which depend on the final configuration. Please ask our technical team to confirm accessibility for your project before you rely on it.",
                points:[
                    "Where the elevator will stand, and what will be visible through the glass.",
                    "The available floor area and the structure around it.",
                    "Which drive type suits your building.",
                     "How the shaft will connect to each floor.",
                     "Power supply and emergency lowering arrangements."
                ]
            },
            
            {
                title:"Accessibility",
                description:"Wheelchair access depends on cabin size, clear door opening and landing space. These depend on the final configuration. Please ask the technical team to confirm accessibility for your project before you rely on it.",
                points:[]
            },
            {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "What cabin diameter is possible for my space?",
                    "What will the clear door opening be?",
                    "Which drive do you recommend, and why?",
                    "What civil work does my home need?"
                ]
            },

        ]

    },
    whyChoose:{
        heading:"Choosing a Partner for a Design-Led Home Elevator",
        description:"",
        points:[
            "A circular glass elevator needs careful planning, so the company you choose matters. Look for a team that studies your property, explains the drive and shaft options in plain language and is clear about what is included.",
            "NVANZ focuses on modern residential elevators for homes across India. Our team can review your home layout, explain which elevator configuration may suit your space and help you understand the technical requirements before you decide."
        ]
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Cabin shape",
                img:images?.PanoramaCabin,
                alt:"PanoramaCabin"
            },
            {
                title:"Glass detail",
                
                img:images?.PanoramaGlass,
                alt:"PanoramaGlass"
            },
            {
                title:"Finish and flooring",
                
                img:images?.PanoramaFinishandFlooring,
                alt:"PanoramaFinishandFlooring"
            },
            {
                title:"Control panel",
                img:images?.PanoramaControlPanel,
                alt:"PanoramaControlPanel"
            },
            {
                title:"Installed project",
                img:images?.PanaromaInstalledProject,
                alt:"PanaromaInstalledProject"
                
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"Is the Panorama 1805 suitable for my villa?",
            ans:"It may be, but it depends on your layout and structure. A site visit by the technical team is needed before anyone can confirm this."
        },
        {
            question:"Which drive does the Panorama use?",
            ans:"It uses either MRL traction or hydraulic, depending on the project. The right option is decided after studying your building."
        },
{
            question:"Is the glass safe?",
            ans:"The cabin uses laminated safety glass, which is a layered type of glass. The full safety system details can be shared by the technical team."
        },
        {
            question:"Can a wheelchair user use this elevator?",
            ans:"This depends on the final cabin size and door opening. Please ask the technical team to confirm your project."
        },
         {
            question:"What happens in a power cut?",
            ans:"Emergency lowering is provided according to the drive configuration. Ask the technical team how it works for your chosen drive."
        },
         {
            question:"Can I control who uses the elevator?",
            ans:"Yes, optional PIN, RFID or biometric access is available."
        },
         {
            question:"Can the elevator be monitored remotely?",
            ans:"Remote monitoring is listed as available. The technical team can explain how it works."
        },
         {
            question:"Can I control who uses the elevator?",
            ans:"Flooring options include marble, stone and premium flooring. The frame is SS 304 or premium PVD. Ask the team about the full range."
        },
        ]
    },
    contact:{
        heading:"Planning a Panoramic Elevator for Your Home? ",
        description:"Share your floor plan or ideas with the NVANZ team. We will help you understand whether the Panorama 1805 suits your space and what your home may need.",
        btnText1:"Enquire About This Model",
        btnText2:"Enquire About This Model"
    }
    
  },

   "compact360Panoramic": {
    id: 7,
    slug: "compact-360-panoramic-circular-elevator-1805",
    name: "Compact 360 Panoramic",

    hero: {
      title: "Compact 360° Panoramic Circular Home Elevator ",
      subtitle: "PANORAMIC · 1805",
      description:
        "A home elevator with a circular glass cabin that offers a clear view of your home as you travel between floors. Designed for villas, duplexes and architect-led homes where the elevator is an important part of the interior design. The drive type and configuration are planned to suit each project.",
       image: images?.compactImg,
      alt:"Compact Img",
      points:[
        "Circular panoramic cabin",
        "Laminated safety glass",
        "SS 304 / premium PVD frame",
        "Custom touchscreen control panel",
        "Optional PIN / RFID or  biometric access"
        
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.63 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "Compact 360° Panoramic Circular Glass Elevator for Modern Homes",
      points:[
      "The NVANZ Compact 360° Panoramic Circular Elevator features a round cabin and a glass or architectural shaft. It is designed for homes where the elevator is placed in a prominent location, such as beside a staircase or within a double-height space.",
      "The drive is either MRL traction or hydraulic, depending on the project requirements. The suspension is rope or belt, as determined by engineering. The elevator is available with a capacity of 250 kg to 630 kg.",
      "This model is not wheelchair accessible. Before choosing it, please consider the shaft design, the finishes and how the elevator will appear within your home."
      ]
    },

    features:{
        title:"Key Features and Benefits of the Compact 360° Panoramic Elevator",
        cardDetails:[
            {
                img:"",
                heading:"Circular Panoramic Cabin",
                description:"A circular cabin with a glass enclosure.",
                subDes:"Open views from inside, and a striking design when seen from outside."
            },
             {
                img:"",
                heading:"Laminated Safety Glass ",
                description:"Multiple layers of glass bonded together.",
                subDes:"If the glass is damaged, it is designed to hold together rather than shatter into loose pieces."
            },
             {
                img:"",
                heading:"Premium Frame and Finishes",
                description:"An SS 304 or premium PVD frame, with marble, stone, or other premium flooring options.",
                subDes:"The cabin can be matched to your interior style."
            },
             {
                img:"",
                heading:"Architectural Lighting and Custom Ceiling ",
                description:"Architectural LED lighting and a custom panoramic ceiling.",
                subDes:"A calm, well-lit cabin that complements the look of your home. "
            },
             {
                img:"",
                heading:"Touchscreen and Minimalist Panels",
                description:"A custom touchscreen car operating panel (COP) inside the cabin and a minimalist landing operating panel (LOP) on each floor.",
                subDes:"Simple, clean controls that suit a modern home."
            },
             {
                img:"",
                heading:"Optional Smart Access",
                description:"Optional PIN, RFID or biometric access.",
                subDes:"You decide who can use the elevator, which is ideal for family homes."
            },
             {
                img:"",
                heading:"Remote Monitoring and Emergency Communication",
                description:"Both features are available on this model.",
                subDes:"Faster support and a reliable way to call for help from inside the cabin. "
            },

        ]
    },

    

    specifications: {
        title:"Technical Specifications",
        details:[
            {
                heading:"CONFIGURATION",
                point:"Circular / panoramic"
            },
             {
                heading:"DRIVE",
                point:"MRL traction / hydraulic, (depending on the project) "
            },
             {
                heading:"SUSPENSION",
                point:"Rope / belt, depending on engineering"
            },
             {
                heading:"CAPACITY",
                point:"250–630 kg"
            },
             {
                heading:"SPEED",
                point:"0.15–0.63 m/s depending on the drive"
            },
             {
                heading:"CABIN",
                point:"Circular / panoramic"
            },
             {
                heading:"GLASS",
                point:"Laminated safety glass"
            },
             {
                heading:"FRAME",
                point:"SS 304 / premium PVD"
            },
             {
                heading:"DOOR",
                point:"Curved / automatic configuration where engineered"
            },
             {
                heading:"SHAFT",
                point:"Glass / architectural enclosure"
            },
             {
                heading:"LIGHTING",
                point:"Architectural LED"
            },
             {
                heading:"CEILING",
                point:"Custom panoramic ceiling"
            },
            {
                heading:"FLOORING",
                point:"Marble / stone / premium flooring"
            },
            {
                heading:"Car Operating Panel (COP) ",
                point:"Custom touchscreen"
            },
            {
                heading:"Landing Operating Panel (LOP)",
                point:"Minimalist premium design "
            },
            {
                heading:"SMART ACCESS",
                point:"Optional PIN / RFID / biometric optional"
            },
            {
                heading:"REMOTE MONITORING",
                point:"Available "
            },
            {
                heading:"EMERGENCY COMMUNICATION",
                point:"Available"
            },
            {
                heading:"Automatic Rescue Device (ARD / emergency lowering",
                point:"Based on the   drive configuration"
            },
             {
                heading:"SAFETY SYSTEM",
                point:"Comprehensive certified safety system"
            },
             

        ],
        desc:"Final suitability, dimensions and installation requirements must be verified for your property by the NVANZ technical team. "
    },

    isRightForHome:{
        heading:"Is a Circular Glass Elevator Right for Your Home?",
        cardDetails:[
            {
                title:"Where It May Fit",
                description:"",
                points:[
                    "New villas and duplexes where the elevator is planned from the beginning.",
                    "Existing homes and renovations, once the site and structure have been assessed.",
                    "Homes where the elevator will be visible, for example, near a staircase or in a double-height space."
                ]
            },
            {
                title:"Things to Plan",
                description:"",
                points:[
                    " Shaft space: A circular shaft requires a specific footprint, which the NVANZ technical team will confirm for your site.",
                    "Drive choice: The choice between MRL traction and hydraulic affects the speed, pit and overhead requirements.",
                    " Heat and light: A glass shaft may require planning for sunlight exposure and cleaning.",
                    "Structure: A glass or architectural shaft must be designed in coordination with your architect."
                ]
            },
            {
                title:"Accessibility",
                description:"This model is not wheelchair accessible. If you need wheelchair access, please speak to the NVANZ team about our other models.",
                points:[]
            },
            {
                title:"Questions to Ask the Technical Team",
                description:"",
                points:[
                    "What shaft size does my home need?",
                    "Which drive suits my project, and why?",
                    "What pit depth and overhead height are required ?",
                    "How is the glass shaft supported and maintained?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ for a Panoramic Home Elevator? ",
        description:"",
        points:[
            "A glass elevator depends on careful planning. Choose a provider that studies your layout before recommending a model, explains the drive options clearly and is honest about what suits your home and what does not.",
            "NVANZ Elevators offers modern residential elevators for new and existing homes. For this model, our team helps you compare drive options, understand shaft and finish requirements, and plan the home elevator installation in coordination with your architect or interior designer."
        ]
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Cabin shape",
               
                img:images?.CompactFullCabin,
                alt:"CompactControlPanel"
            },
            {
                title:"Glass detail",
                img:images?.CompactGlassDetail,
                alt:"CompactInstalledProject"
            },
            {
                title:"Finish and flooring",
                
                img:images?.CompactFinishandFlooring,
                alt:"CompactGlassDetail"
            },
            {
                title:"Control panel",
                
                img:images?.CompactControlPanel,
                alt:"CompactFinishandFlooring"
            },
            {
                title:"Installed project (only if real)",
                
                img:images?.CompactInstalledProject,
                alt:"CompactFullCabin"
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"Is this elevator wheelchair accessible?",
            ans:"No. This model is not wheelchair accessible. For wheelchair access, please speak to the NVANZ team about our other models."
        },
        {
            question:"Is it an MRL traction or a hydraulic elevator?",
            ans:" The drive is either MRL traction or hydraulic, depending on the project. The NVANZ technical team will recommend the right option for your home."
        },
{
            question:"How fast does the elevator travel?",
            ans:"The speed ranges from 0.15 m/s to 0.63 m/s, depending on the drive. "
        },
        {
            question:"What is the weight capacity of the elevator?",
            ans:"The capacity ranges from 250 kg to 630 kg. ."
        },
        {
            question:"How much space does it need?",
            ans:" A circular shaft needs a specific footprint. The NVANZ technical team will confirm the exact size for your site."
        },
         {
            question:"What happens in a power cut?",
            ans:"ARD or emergency lowering is available according to the drive configuration. Ask the team what applies to your setup."
        },
         {
            question:"Can I control who uses it?",
            ans:"PIN, RFID or biometric access can be added as options."
        },
        {
            question:"Is it suitable for an existing home?",
            ans:"It may be, but only after a site assessment of the structure and layout."
        },
        ]
    },
    contact:{
        heading:"Planning a Panoramic Elevator for Your Home?",
        description:"Share your floor layout and design ideas with NVANZ. Our team will help you understand whether this model suits your property and which drive is best for your project.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },
};
