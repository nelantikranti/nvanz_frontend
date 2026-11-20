
import images from "../assets/Images";

export const products = {
  "signature-1101": {
    id: 1,
    slug: "signature-1101",
    name: "Signature 1101",

    hero: {
      title: "Signature 1101 Home Elevator for Hyderabad Villas and Duplexes",
      subtitle: "TRACTION · 1101",
      description:
        "NVANZ Signature 1101 is a premium residential elevator for homeowners who want smooth, convenient movement between floors. It offers a capacity range of 250–630 kg, automatic or manual doors, and a choice of stainless steel, glass or premium cabin finishes.",
      image: images?.liftImag,
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
      title: "A HOME ELEVATOR BUILT AROUND YOUR PROPERTY",
      points:[
        "The Signature 1101 is designed for private homes, such as villas, duplexes and multi-floor family residences. Based on the supplied specifications, it uses a hydraulic drive. A hydraulic cylinder moves the cabin, and a compact power unit (HPU) controls the movement. · to be confirmed",
        "It can be planned with automatic or manual doors and with stainless steel, glass or premium cabin options. Speed ranges from about 0.15 to 0.40 m/s, depending on the design.",
        "Before you decide, remember that pit depth, machine room arrangement and final design depend on your project. A site assessment is the best way to confirm what will work in your home."
      ]
    },

    features:{
        title:"KEY FEATURES AND CUSTOMER BENEFITS",
        cardDetails:[
            {
                img:images?.productFeaturesImg1,
                heading:"HYDRAULIC CYLINDER DRIVE",
                description:"A hydraulic cylinder moves the cabin. The configuration is direct or 2:1, as engineered.",
                subDes:"A smooth, steady ride at residential speeds."
            },
            {
                img:images?.productFeaturesImg2,
                heading:"COMPACT LOW-NOISE POWER UNIT",
                description:"A compact power unit, with a remote arrangement where feasilbe.",
                subDes:"Gives flexibility in planning where the equipment sits."
            },
            {
                img:images?.productFeaturesImg3,
                heading:"Variable-speed control",
                description:"A premium variable-speed pump and a VVVF / hydraulic controller.",
                subDes:"Helps control how the cabin starts and stops."
            },
            {
                img:images?.productFeaturesImg4,
                heading:"Safety and emergency provisions",
                description:"Overload protection, a light curtain, emergency communication and ARD / emergency lowering as engineered.",
                subDes:"Gives families added confidence during daily use and unexpected events."
            },
            {
                img:images?.productFeaturesImg5,
                heading:"Cabin and door choices",
                description:"Automatic or manual doors. Cabin in stainless steel, glass or premium finish.",
                subDes:"Lets the elevator match your home’s interior."
            },
            {
                img:images?.productFeaturesImg6,
                heading:"Remote diagnostics",
                description:"Remote checking of the elevator’s condition (optional or part of a premium package).",
                subDes:"Can help the service team find issues early."
            },
            
        ]
    },

    

    specifications: {
        title:"Technical Specifications",
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team.",
        details:[
            {
                heading:"DRIVE",
                point:"Hydraulic · to be confirmed"
            },
             {
                heading:"PUMP",
                point:"Premium variable-speed / suitable hydraulic unit"
            },
             {
                heading:"CAPACITY",
                point:"250–630 kg residential"
            },
             {
                heading:"SPEED",
                point:"~0.15–0.40 m/s depending on design"
            },
             {
                heading:"CONFIGURATION",
                point:"Direct / 2:1 as engineered"
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
                point:"SS / glass / premium"
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
                point:"Yes, as engineered"
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
                point:"Optional / standard premium package"
            },


        ]
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"It is intended for residential use: villas, duplexes and multi-floor homes, in new builds or renovations.",
                points:[
                   
                ]
            },
             {
                title:"Plan early",
                description:"",
                points:[
                     "Pit depth (project-dependent)",
                    "Where the power unit can be placed",
                    "Cabin size, shaft size and number of floors",
                    "Door type and landing area"
                ]
            },
            {
                title:"Accessibility",
                description:"If someone at home uses a wheelchair or has limited mobility, tell us early. Cabin inside size, door opening width, landing space and control height all need to be checked. · to be confirmed",
                points:[]
            },
            {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "How many floors will the elevator serve?",
                    "Where can the pit and power unit go?",
                    "Is the home new or existing?",
                    "Which door and cabin options suit the design?",
                    "What service and support follow installation?"
                ]
            },
            
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ?",
        description:"A home elevator is a long-term part of your house, so the provider matters as much as the product. A good partner studies your property first, recommends a suitable model, and explains technical needs such as the pit and machine space in plain language. NVANZ focuses on modern residential elevators for homes in Hyderabad. Our team helps you compare options, plan the layout with your architect or builder, and understand the choices before you decide."
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:images?.product1GalleryImg1
            },
            {
                title:"Entrance and door",
                img:images?.product1GalleryImg2
            },
            {
                title:"Control panel",
                img:images?.product1GalleryImg3
            },
            {
                title:"Compact power unit",
                img:images?.product1GalleryImg4
            },
            {
                title:"Installed home project",
                img:images?.product1GalleryImg5
            }

        ]

    },
    faq:{
        heading:"Frequently Asked Questions",
        questionsAndAns:[
        {
            question:"How does a hydraulic home elevator move?",
            ans:"A hydraulic cylinder moves the cabin using fluid pressure from a compact power unit. · to be confirmed"
        },
        {
            question:"Does it need a machine room?",
            ans:"The power unit (HPU) is compact, and a remote arrangement is possible where feasible. The right setup is decided after a site visit"
        },
        {
            question:"How deep should the pit be?",
            ans:"Pit depth is project-dependent. The technical team will confirm the figure for your design. · to be confirmed"
        },
        {
            question:"What happens during a power cut?",
            ans:"The model lists ARD / emergency lowering, as engineered. Exact behaviour should be confirmed by the technical team. · to be confirmed"
        },
    ],
    },
    
    contact:{
        heading:"Planning a Home Elevator? Let’s Look at Your Layout",
        description:"Share your floor plan, number of floors and daily needs with NVANZ. Our team will help you check whether the Signature 1101 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

   "prestigeMrlRopeHome": {
    id: 2,
    slug: "prestigeMrlRopeHome",
    name: "Prestige Mrl Rope Home",

    hero: {
      title: "Prestige MRL Rope Home Elevator (1110) for Hyderabad Homes",
      subtitle: "MRL · 1110",
      description:
        "The Prestige 1110 is a machine-room-less rope elevator from NVANZ. It has a gearless permanent magnet motor and an integrated VVVF controller. It is made for homeowners who want a smooth, modern elevator for villas, duplexes and renovation projects. Capacities go from 320 kg to 800 kg.",
      image: "",
      points:[
        "Gearless PMSM machine with MRL configuration",
        "Capacity options: 320 / 450 / 630 / 800 kg",
        "Speed range: 0.63–1.0 m/s",
        "ARD, overload protection and full-height light curtain",
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
        "The Prestige 1110 is a machine-room-less (MRL) elevator. In general, an MRL design does not need a separate room above the shaft for the machine. This can make planning easier for a home.",
        "The car is lifted by steel wire ropes with 2:1 roping, driven by a gearless permanent magnet motor. An integrated VVVF controller manages motor speed and movement.",
        "The cabin can be finished in SS 304, SS 316 or glass. Doors are automatic, in telescopic or centre-opening styles."
     
      ]
    },

    features:{
        title:"Key Features and Customer Benefits",
        cardDetails:[
            {
                img:"",
                heading:"MRL layout",
                description:"Planned without a separate machine room.",
                subDes:"Less space is used for equipment. This can help in new villas and in renovations."
            },
             {
                img:"",
                heading:"Gearless PMSM drive",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"Fewer moving parts in the drive and smooth operation."
            },
             {
                img:"",
                heading:"Steel wire rope with 2:1 roping",
                description:"The car hangs on steel ropes over a traction sheave engineered to suit the rope and motor.",
                subDes:"A proven rope-driven design with a choice of capacities from 320 to 800 kg."
            },
             {
                img:"",
                heading:"VVVF controller and encoder",
                description:"The controller adjusts motor speed; the high-resolution encoder reports the exact cabin position.",
                subDes:"Smoother starts and stops, and accurate floor levelling."
            },
             {
                img:"",
                heading:"Safety and protection",
                description:"ARD, overload protection, a full-height light curtain on the door and a dual independent brake system, where applicable.",
                subDes:"Adds layers of protection for family members, including children and older adults."
            },
             {
                img:"",
                heading:"Remote monitoring and smart access",
                description:"Remote monitoring and GSM/4G emergency communication. PIN, RFID or biometric access is optional.",
                subDes:"Status checks, emergency contact, and optional control over who uses the elevator."
            },
        ]
    },

    

    specifications: {
        title:"Technical Specifications",
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
                point:"0.63–1.0 m/s"
            },
            {
                heading:"MOTOR",
                point:"Gearless permanent magnet"
            },
            {
                heading:"TRACTION SHEAVE",
                point:"Engineered to rope / motor"
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
                point:"Dual independent brake system where applicable"
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
                point:"PIN / RFID / biometric optional"
            }

        ],
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas, duplexes and renovation projects where a separate machine room is not wanted. A site assessment decides if it fits.",
                points:[]
            },
             {
                title:"Plan early",
                description:"",
                points:[
                    "Shaft size, travel height and number of floors",
                    "Pit depth and overhead height",
                    "Where the entrance will open on each floor",
                    "Structural support for the elevator"
                ]
            },
             {
                title:"Accessibility",
                description:"The product is listed as “wheelchair accessible”. This needs checking against the cabin size, door width and entrance space for each home. · to be confirmed",
                points:[]
            },
             {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "Which capacity and speed are offered for homes?",
                    "What cabin and door sizes are available?",
                    "What does a site survey include?",
                    "What power supply is required?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ?",
        description:"A good elevator provider starts with your property, not the product. They should check your space, explain the options clearly and be honest about limits. NVANZ Elevators focuses on modern residential elevators in Hyderabad. The team can help you understand the Prestige 1110, discuss your layout and explain technical needs before you decide."
    },
     productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:""
            },
            {
                title:"Automatic door and entrance",
                img:""
            },
            {
                title:"Machine and belt / sheave detail",
                img:""
            },
            {
                title:"Control panel close-up",
                img:""
            },
            {
                title:"Installed project (only if a real project exists)",
                img:""
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
            {
            question:"Which capacity should I choose?",
            ans:"The model comes in 320, 450, 630 and 800 kg. Choose based on how many people ride together and whether you want to carry items. The technical team can guide you."
        },
        {
            question:"What does “machine-room-less” mean?",
            ans:"The drive machine sits inside the shaft instead of in a separate room. You still need a properly sized shaft, pit and headroom."
        },
        {
            question:"Is the Prestige 1110 suitable for my villa?",
            ans:"It may be, depending on shaft size, travel height and structure. A site assessment is needed."
        },
        {
            question:"What happens in a power failure?",
            ans:"The elevator has an ARD (automatic rescue device) and emergency communication. How it works needs confirmation. · to be confirmed"
        },
        {
            question:"Is it wheelchair accessible?",
            ans:"That depends on cabin size and door width. Please discuss this with the technical team before you decide. · to be confirmed"
        },
{
            question:"Can it be fitted in an existing house?",
            ans:"Possibly, but only after a site assessment of shaft, pit and headroom."
        },
        {
            question:"Can I control who uses the elevator?",
            ans:"PIN, RFID or biometric access is optional. Ask NVANZ if you want it included."
        },
        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let’s Check What Fits Your Property",
        description:"Share your property layout and requirements with NVANZ. The team can help you understand if the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "prestigeMrlFlatBelt": {
   id: 3,
    slug: "prestigeMrlFlatBelt",
    name: "Prestige Mrl Flat Belt",

    hero: {
      title: "Prestige MRL Flat Belt Elevator 1110 for Homes in Hyderabad",
      subtitle: "MRL · 1110",
      description:
        "The Prestige 1110 is a machine-room-less home elevator from NVANZ Elevators. It uses a compact gearless motor and a flat belt to move the cabin. It has an automatic door and smart monitoring. It may suit villas, duplexes and renovated homes in Hyderabad and Andhra Pradesh.",
      image: "",
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
     "The Prestige 1110 is a machine-room-less (MRL) elevator. This means it is planned without a separate room for the machine, which is useful in homes where space is limited.",
     "Instead of round ropes, it uses a flat steel/PU belt with a small-diameter belt sheave. This allows a compact gearless machine. The motor is a PMSM type, controlled by a VVVF drive and a high-resolution encoder.",
     "The cabin comes in premium SS or glass with an automatic door. The elevator also has an automatic rescue device (ARD), remote diagnostics and smart monitoring.",
     "Before choosing any elevator, a homeowner should have the shaft size, travel height and building structure checked. The Prestige 1110 is no different."
      ]
    },

    features:{
        title:"KEY FEATURES AND CUSTOMER BENEFITS",
        cardDetails:[
            {
                img:"",
                heading:"MRL layout",
                description:"Planned without a separate machine room.",
                subDes:"Less space is used for equipment. This can help in new villas and in renovations."
            },
            {
                img:"",
                heading:"Gearless PMSM drive",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"Fewer moving parts in the drive and smooth operation."
            },
            {
                img:"",
                heading:"Flat steel/PU belt",
                description:"A flat belt runs over a small-diameter sheave, so the machine can be compact.",
                subDes:"A smaller machine helps the MRL layout."
            },
            {
                img:"",
                heading:"VVVF controller and encoder",
                description:"The controller adjusts motor speed; the high-resolution encoder reports the exact cabin position.",
                subDes:"Smoother starts and stops, and accurate floor levelling."
            },
            {
                img:"",
                heading:"Automatic door, ARD and emergency communication",
                description:"An automatic door, an automatic rescue device and a way to contact help from inside the cabin.",
                subDes:"More comfort for daily use and a defined plan if power fails."
            },
            {
                img:"",
                heading:"Remote monitoring",
                description:"The elevator’s status can be checked from a distance.",
                subDes:"Easier follow-up. Service features and response times depend on the support plan. · to be confirmed"
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
                point:"MRL"
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
                point:"VVVF"
            },{
                heading:"Encoder",
                point:"High-resolution"
            },{
                heading:"Belt monitoring",
                point:"Recommended"
            },{
                heading:"Brake",
                point:"Dual brake arrangement where applicable"
            },{
                heading:"Noise",
                point:"Low-noise architecture"
            },{
                heading:"Cabin",
                point:"Premium SS / glass"
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
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas, duplexes and renovation projects where a separate machine room is not wanted. A site assessment decides if it fits.",
                points:[]
            },
              {
                title:"Plan early",
                description:"",
                points:[
                    "Shaft size, travel height and number of floors",
                    "Pit depth and overhead height",
                    'Where the entrance will open on each floor',
                    "Structural support for the elevator"

                ]
            },
              {
                title:"Accessibility",
                description:"The product is listed as “wheelchair accessible”. This needs checking against the cabin size, door width and entrance spacefor each home. · to be confirmed",
                points:[]
            },
              {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "Which capacity and speed are offered for homes?",
                    "What cabin and door sizes are available?",
                    "What does a site survey include?",
                    "What power supply is required?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"WHY CHOOSE NVANZ?",
        description:"A good elevator provider starts with your property, not the product. They should check your space, explain the options clearly and be honest about limits. NVANZ Elevators focuses on modern residential elevators in Hyderabad. The team can help you understand the Prestige 1110, discuss your layout and explain technical needs before you decide."
    },
   productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:""
            },
            {
                title:"Automatic door and entrance",
                img:""
            },
            {
                title:"Control panel close-up",
                img:""
            },
            {
                title:"Machine and belt / sheave detail",
                img:""
            },
            {
                title:"Installed project (only if a real project exists)",
                img:""
            }

        ]

    },
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
        heading:"Planning a Home Elevator? Let's Check What Fits Your Property",
        description:"Share your property layout and requirements with NVANZ. The team can help you understand if the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "prestigeMrlGroovedBelt": {
    id: 4,
    slug: "prestigeMrlGroovedBelt",
    name: "Prestige Mrl Grooved Belt",

    hero: {
      title: "Prestige MRL Grooved Belt Elevator (1110) for Homes in Hyderabad and Andhra Pradesh",
      subtitle: "MRL · 1110",
      description:
        "The Prestige 1110 is a machine-room-less home elevator with a gearless PMSM drive and a steel-reinforced coated belt. It is designed for new villas, duplexes and renovation projects where a separate machine room is not practical. It is available for loads from 320 kg to 1000 kg",
      image: "",
      points:[
        "Machine-room-less (MRL) design",
        "Gearless PMSM drive",
        "Capacity from 320–1000 kg",
        "Speed from 0.63–1.60 m/s",
        "Automatic door and ARD (automatic rescue device)"
        
      ]

    },
    section2:{

        speed:"0.63 m/s → 1.6 m/s",
        capacity:"320 kg → 1000 kg"

    },

    overview: {
      title: "A Compact MRL Elevator Built on Belt Technology",
      points:[
        "The Prestige 1110 is an MRL elevator. The drive machine sits inside the shaft, so a separate machine room is not needed. It uses a gearless PMSM machine, a compact belt sheave and a steel-reinforced coated belt / grooved belt, as engineered.",
        "It is meant for residential use. It can suit a modern villa, a duplex or a renovated home that needs reliable movement between floors.",
        "Before you decide, keep in mind that shaft size, pit depth, headroom and door position all depend on your property. The NVANZ technical team should confirm these after a site assessment."
     
      ]
    },

    features:{
        title:"KEY FEATURES AND CUSTOMER BENEFITS",
        cardDetails:[
            {
                img:"",
                heading:"MRL layout",
                description:"Planned without a separate machine room.",
                subDes:"Less space is used for equipment. This can help in new villas and in renovations."
            },
             {
                img:"",
                heading:"Gearless PMSM drive",
                description:"A permanent magnet synchronous motor drives the elevator without a gearbox.",
                subDes:"Fewer moving parts in the drive and smooth operation."
            },
             {
                img:"",
                heading:"Steel-reinforced coated belt",
                description:"A belt with steel reinforcement inside a protective coating. The system includes belt monitoring.",
                subDes:"The condition of the belt can be checked as part of regular care."
            },
             {
                img:"",
                heading:"VVVF controller and encoder",
                description:"The controller adjusts motor speed; the high-resolution encoder reports the exact cabin position.",
                subDes:"Smoother starts and stops, and accurate floor levelling."
            },
             {
                img:"",
                heading:"Automatic door, ARD and emergency communication",
                description:"An automatic door, an automatic rescue device and a way to contact help from inside the cabin.",
                subDes:"More comfort for daily use and a defined plan if power fails."
            },
             {
                img:"",
                heading:"Remote monitoring",
                description:"The elevator’s status can be checked from a distance.",
                subDes:"Easier follow-up. Service features and response times depend on the support plan. · to be confirmed"
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
                point:"Steel-reinforced coated belt / grooved belt, as engineered"
            },
             {
                heading:"Configuration",
                point:"MRL"
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
                point:"Automatic"
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
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas, duplexes and renovation projects where a separate machine room is not wanted. A site assessment decides if it fits.",
                points:[]
            },
             {
                title:"Plan early",
                description:"",
                points:[
                    "Shaft size, travel height and number of floors",
                    "Pit depth and overhead height",
                    "Where the entrance will open on each floor",
                    "Structural support for the elevator"
                ]
            },
             {
                title:"Accessibility",
                description:"The product is listed as “wheelchair accessible”. This needs checking against the cabin size, door width and entrance space for each home. · to be confirmed",
                points:[]
            },
             {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "Which capacity and speed are offered for homes?",
                    "What cabin and door sizes are available?",
                    "What does a site survey include?",

                    "What power supply is required?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ?",
        description:"A good elevator provider starts with your property, not the product. They should check your space, explain the options clearly and be honest about limits. NVANZ Elevators focuses on modern residential elevators in Hyderabad. The team can help you understand the Prestige 1110, discuss your layout and explain technical needs before you decide."
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:""
            },
            {
                title:"Automatic door and entrance",
                img:""
            },
            {
                title:"Control panel close-up",
                img:""
            },
            {
                title:"Machine and belt / sheave detail",
                img:""
            },
            {
                title:"Installed project (only if a real project exists)",
                img:""
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"How is a belt different from a steel rope?",
            ans:"Both carry the cabin. This model uses a steel-reinforced coated belt / grooved belt over a compact sheave."
        },
        {
            question:"What does “machine-room-less” mean?",
            ans:"The drive machine sits inside the shaft instead of in a separate room. You still need a properly sized shaft, pit and headroom."
        },
{
            question:"The drive machine sits inside the shaft instead of in a separate room. You still need a properly sized shaft, pit and headroom.",
            ans:"The elevator has an ARD (automatic rescue device) and emergency communication. How it works needs confirmation. · to be confirmed"
        },
        {
            question:"Is it wheelchair accessible?",
            ans:"That depends on cabin size and door width. Please discuss this with the technical team before you decide. · to be confirmed"
        },
        {
            question:"Can it be fitted in an existing house?",
            ans:"Possibly, but only after a site assessment of shaft, pit and headroom."
        },
        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let’s Check What Fits Your Property",
        description:"Share your property layout and requirements with NVANZ. The team can help you understand if the Prestige 1110 suits your home.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "groundHydraulicHome": {
    id: 2,
    slug: "groundHydraulicHome",
    name: "Ground Hydraulic Home",

    hero: {
      title: "Ground Hydraulic Home Elevator for Villas and Duplex Homes in Hyderabad",
      subtitle: "HYDRAULIC · 1506",
      description:
        "The NVANZ Ground Hydraulic Elevator is a residential home elevator. A hydraulic cylinder moves the cabin, and a compact, low-noise power unit drives it. With a 250–630 kg capacity range, it suits homeowners in Hyderabad and Andhra Pradesh planning a new villa, a duplex or a renovation.",
      image: "",
      points:[
        "Hydraulic drive with compact low-noise power unit",
        "250–630 kg residential capacity range",
        "Overload protection and light curtain",
        "Emergency communication and emergency lowering (as engineered)"
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.4 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "How the Ground Hydraulic Elevator Works in a Home",
      points:[
     "This elevator uses a hydraulic cylinder to lift and lower the cabin. The power unit holds the pump and controls the movement. It is described as compact and low-noise, and it can be placed in a compact arrangement or a remote arrangement where feasible.",
     "It is made for residential use, with speeds of about 0.15–0.40 m/s, depending on the design. Cabin options include stainless steel, glass or premium finishes.",
     "Before choosing, homeowners should know that the pit depth, machine space and final layout depend on the project. A site check by the technical team is needed to confirm what suits your home."
      ]
    },

    features:{
        title:"Key Features and Customer Benefits",
        cardDetails:[
            {
                img:"",
                heading:"Hydraulic cylinder drive",
                description:"A hydraulic cylinder moves the cabin. The configuration is direct or 2:1, as engineered.",
                subDes:"A smooth, steady ride at residential speeds."
            },
            {
                img:"",
                heading:"Compact low-noise power unit",
                description:"A compact power unit, with a remote arrangement where feasible.",
                subDes:"Gives flexibility in planning where the equipment sits."
            },
            {
                img:"",
                heading:"Variable-speed control",
                description:"A premium variable-speed pump and a VVVF / hydraulic controller.",
                subDes:"Helps control how the cabin starts and stops."
            },
            {
                img:"",
                heading:"Safety and emergency provisions",
                description:"Overload protection, a light curtain, emergency communication and ARD / emergency lowering as communication and ARD / emergency lowering as",
                subDes:"Gives families added confidence during daily use and unexpected events."
            },
            {
                img:"",
                heading:"Cabin and door choices",
                description:"Automatic or manual doors. Cabin in stainless steel, glass or premium finish.",
                subDes:"Lets the elevator match your home’s interior."
            },
            {
                img:"",
                heading:"Remote diagnostics",
                description:"Remote checking of the elevator’s condition (optional or part of a premium package).",
                subDes:"Can help the service team find issues early."
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
                point:"~0.15–0.40 m/s depending on design"
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
                point:"Compact low-noise HPU"
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
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas, duplex homes and renovation projects where a home elevator is planned.",
                points:[]
            },
             {
                title:"Plan early",
                description:"",
                points:[
                    "Pit: depth depends on the project.",
                    "Equipment space: the power unit needs a compact or remote location.",
                    "Capacity: choose within 250–630 kg based on family use.",
                    "Door type: automatic or manual."
                ]
            },

             {
                title:"Accessibility",
                description:"The supplied specifications do not give cabin size or clear door width, so a wheelchair-accessible fit cannot be promised yet. This needs to be assessed for your chosen configuration. · to be confirmed",
                points:[]
            },
             {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "What pit depth is required for my floors?",
                    "Where can the power unit be placed?",
                    "Which cabin and door size works for wheelchair use?",
                    "What does the emergency lowering do during a power cut?",
                    "What maintenance and support will I receive?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ?",
        description:"A home elevator is a long-term decision, so the right partner matters as much as the product. Look for a team that studies your property first, explains technical needs in plain language, and plans the pit, equipment space and finishes with you. NVANZ focuses on modern residential elevators for homes in Hyderabad and nearby regions. Our team helps you compare options and understand what your project needs before you decide."
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Full cabin interior",
                img:""
            },
            {
                title:"Entrance and door",
                img:""
            },
            {
                title:"Control panel",
                img:""
            },
            {
                title:"Compact power unit",
                img:""
            },
            {
                title:"Installed home project (if available)",
                img:""
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"How does a hydraulic home elevator move?",
            ans:"A hydraulic cylinder lifts the cabin, and a power unit with a pump controls the movement. The exact setup (direct or 2:1) is engineered for each project."
        },
        {
            question:"Does it need a pit?",
            ans:"The pit depends on the project. Our technical team will confirm the depth after checking your site."
        },
{
            question:"Where does the power unit go?",
            ans:""
        },
        {
            question:"Where does the power unit go?",
            ans:"It is compact, and a remote arrangement is possible where feasible. The best location is decided after a site visit."
        },
        {
            question:"What happens during a power cut?",
            ans:"The elevator has ARD / emergency lowering, as engineered. Our team can explain exactly how it works for your configuration."
        },
        {
            question:"Is it wheelchair accessible?",
            ans:"This depends on the cabin size and door width, which are confirmed per project. Please discuss your needs with our team."
        },
        {
            question:"Can I choose the door and cabin?",
            ans:"Doors can be automatic or manual, and the cabin can be SS, glass or premium. Options depend on the project"
        },
        {
            question:"Is remote diagnostics included?",
            ans:"It is listed as optional or part of a premium package. Our team can confirm what is available for this model."
        },


        ]
    },
    contact:{
        heading:"Planning a Home Elevator? Let’s Check Your Layout",
        description:"Share your floor plan and requirements with NVANZ. Our team can help you understand whether this hydraulic model suits your home and what planning is needed.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },

  "nvanzPanorama-1805": {
    id: 2,
    slug: "nvanzPanorama-1805",
    name: "Nvanz Panorama-1805",

    hero: {
      title: "NVANZ Panorama 1805: Circular Panoramic Home Elevator",
      subtitle: "A circular glass elevator designed for homeowners who want their elevator to be a visible part of the home. The Panorama 1805 suits new villas, duplexes and renovation projects where the space and structure allow a glass shaft.",
      description:
        "",
      image: "",
      points:[
        "Circular, 360° panoramic cabin",
        "Laminated safety glass",
        "Remote monitoring and emergency communication",
        "Optional smart access (PIN, RFID or biometric)",
        "Capacity range of 250–630 kg"
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.63 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "A Glass Elevator Shaped Around Your Home’s Design",
      points:[
     "The Panorama 1805 is a circular panoramic elevator built with laminated safety glass and a premium metal frame. It is meant for homes where the elevator will be seen from the living area, staircase or a double-height space.",
     "The drive can be MRL traction or hydraulic, depending on the project. Your technical team will recommend the right option after studying your building.",
     "A glass elevator works best when it is planned with the architecture, not added afterwards. Think about where it will stand, what it will look out onto, and how the shaft will meet your floors before you decide."
      ]
    },

    features:{
        title:"Key Features and Customer Benefits",
        cardDetails:[
            {
                img:"",
                heading:"Circular panoramic cabin",
                description:"A circular cabin with a glass enclosure.",
                subDes:"Open views from inside, and a striking shape from outside."
            },
             {
                img:"",
                heading:"Laminated safety glass",
                description:"Layers of glass bonded together.",
                subDes:"If the glass is damaged, it is designed to hold together instead of scattering."
            },
             {
                img:"",
                heading:"Premium frame and finishes",
                description:"SS 304 or premium PVD frame, with marble, stone or premium flooring.",
                subDes:"The cabin can match your interior style."
            },
             {
                img:"",
                heading:"Architectural lighting and",
                description:"custom ceiling",
                subDes:"Architectural LED lighting and a custom panoramic ceiling."
            },
             {
                img:"",
                heading:"Touchscreen and minimalist panels",
                description:"A custom touchscreen COP (inside the cabin) and a minimalist LOP (call panel on each floor).",
                subDes:"Clean controls that suit a modern home."
            },
             {
                img:"",
                heading:"Optional smart access",
                description:"PIN, RFID or biometric access (optional).",
                subDes:"You decide who can use the elevator, which suits"
            },
             {
                img:"",
                heading:"Remote monitoring and emergency communication",
                description:"Both are available on this model.",
                subDes:"Faster support, and a way to call for help from inside the cabin."
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
                point:"MRL traction / hydraulic, project dependent"
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
                point:"0.15–0.63 m/s depending on drive"
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
                point:"PIN / RFID / biometric optional"
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
                point:"According to drive configuration"
            },
            {
                heading:"SAFETY SYSTEM",
                point:"Complete certified safety architecture"
            },


        ],
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas, duplexes and renovation projects where the elevator will be a visible feature. Because the shaft is glass and architectural, planning matters more than with a standard elevator.",
                points:[]
            },
            {
                title:"Plan early",
                description:"",
                points:[
                    "Where the elevator will stand, and what will be visible through the glass",
                    "The available floor area and the structure around it",
                    "Which drive type suits your building",
                    "How the shaft will connect to each floor",
                    "Power supply and emergency lowering arrangements"
                ]
            },
            {
                title:"Accessibility",
                description:"Wheelchair access depends on cabin size, clear door opening and landing space. These depend on the final configuration. Please ask the technical team to confirm accessibility for your project before you rely on it. · to be confirmed",
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
        heading:"• What civil work does my home need?",
        description:"A glass circular elevator needs careful planning, so the company you choose matters. Look for a team that studies your property, explains the drive and shaft options in plain language, and is clear about what is included. NVANZ focuses on modern residential elevators in Hyderabad. Our team can discuss your layout, explain which configuration may suit your home, and help you understand the technical requirements before you decide."
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Cabin shape",
                img:""
            },
            {
                title:"Glass detail",
                img:""
            },
            {
                title:"Finish and flooring",
                img:""
            },
            {
                title:"Control panel",
                img:""
            },
            {
                title:"Installed project (only if real)",
                img:""
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
            ans:"This depends on the final cabin size and door opening. Please ask the technical team to confirm for your project. · to be confirmed"
        },
         {
            question:"What happens in a power cut?",
            ans:"Emergency lowering is provided according to the drive configuration. Ask the technical team how it works for your chosen drive."
        },
         {
            question:"Can I control who uses the elevator?",
            ans:"Yes, optional PIN, RFID or biometric access is available."
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
    slug: "compact360Panoramic",
    name: "Compact 360 Panoramic",

    hero: {
      title: "Compact 360° Panoramic Circular Home Elevator in Hyderabad",
      subtitle: "PANORAMIC · 1805",
      description:
        "An elevator with a circular glass cabin that lets you see your home as An elevator with a circular glass cabin that lets you see your home as architect-led homes where the elevator is part of the interior design. Drive type and configuration are planned for each project.",
      image: "",
      points:[
        "Circular panoramic cabin",
        "Laminated safety glass",
        "SS 304 / premium PVD frame",
        "Custom touchscreen control panel",
        "Optional PIN / RFID / biometric access"
        
      ]

    },
    section2:{

        speed:"0.15 m/s → 0.63 m/s",
        capacity:"250 kg → 630 kg"

    },

    overview: {
      title: "A Glass Elevator Designed to Be Seen",
      points:[
      "The NVANZ 360° Panoramic Circular Elevator has a round cabin and a glass or architectural shaft. It is built for homes where the elevator sits in a visible spot, such as beside a staircase or in a double-height space.",
      "The drive is MRL traction or hydraulic, depending on the project. The suspension is rope or belt, based on engineering. Capacity runs from 250 to 630 kg.",
      "This model is not wheelchair accessible. Before choosing it, think about the shaft design, the finishes and how the elevator will look from inside your home."
      ]
    },

    features:{
        title:"Key Features and Customer Benefits",
        cardDetails:[
            {
                img:"",
                heading:"Circular panoramic cabin",
                description:"A circular cabin with a glass enclosure.",
                subDes:"Open views from inside, and a striking shape from outside."
            },
             {
                img:"",
                heading:"Laminated safety glass",
                description:"Layers of glass bonded together.",
                subDes:"If the glass is damaged, it is designed to hold together instead of scattering."
            },
             {
                img:"",
                heading:"Premium frame and finishes",
                description:"SS 304 or premium PVD frame, with marble, stone or premium flooring.",
                subDes:"The cabin can match your interior style."
            },
             {
                img:"",
                heading:"Architectural lighting and custom ceiling",
                description:"Architectural LED lighting and a custom panoramic ceiling.",
                subDes:"A calm, well-lit cabin that fits the look of the home."
            },
             {
                img:"",
                heading:"Touchscreen and minimalist panels",
                description:"A custom touchscreen COP (inside the cabin) and a minimalist LOP (call panel on each floor).",
                subDes:"Clean controls that suit a modern home."
            },
             {
                img:"",
                heading:"Optional smart access",
                description:"PIN, RFID or biometric access (optional).",
                subDes:"You decide who can use the elevator, which suits family homes."
            },
             {
                img:"",
                heading:"Remote monitoring and emergency communication",
                description:"Both are available on this model.",
                subDes:"Faster support, and a way to call for help from inside the cabin."
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
                point:"MRL traction / hydraulic, project dependent"
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
                point:"0.15–0.63 m/s depending on drive"
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
                point:"PIN / RFID / biometric optional"
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
                point:"According to drive configuration"
            },
             {
                heading:"SAFETY SYSTEM",
                point:"Complete certified safety architecture"
            },
             

        ],
        desc:"Final suitability, dimensions and installation needs must be verified for your property by the NVANZ technical team."
    },

    isRightForHome:{
        heading:"Is This Right for Your Home?",
        cardDetails:[
            {
                title:"Where it may fit",
                description:"New villas and duplexes where the elevator is planned from the start; renovations, once the site and structure have been assessed; homes where the elevator will be visible, for example near a staircase or in a double-height space.",
                points:[]
            },
            {
                title:"Plan early",
                description:"",
                points:[
                    "Shaft space: a circular shaft needs a specific footprint. · to be confirmed",
                    "Drive choice: MRL traction or hydraulic affects speed, pit and overhead needs.",
                    "Heat and light: a glass shaft may need planning for sunlight and cleaning.",
                    "Structure: a glass or architectural shaft must be designed together with your architect."
                ]
            },
            {
                title:"Accessibility",
                description:"This model is not wheelchair accessible. If you need wheelchair access, speak to NVANZ about other models.",
                points:[]
            },
            {
                title:"Questions to ask the technical team",
                description:"",
                points:[
                    "What shaft size does my home need?",
                    "Which drive suits my project, and why?",
                    "What pit depth and overhead height are needed?",
                    "How is the glass shaft supported and maintained?"
                ]
            },
        ]

    },
    whyChoose:{
        heading:"Why Choose NVANZ?",
        description:"A glass circular elevator needs careful planning, so the company you choose matters. Look for a team that studies your property, explains the drive and shaft options in plain language, and is clear about what is included. NVANZ focuses on modern residential elevators in Hyderabad. Our team can discuss your layout, explain which configuration may suit your home, and help you understand the technical requirements before you decide."
    },
    productGallery:{
        heading:"Product Gallery",
        images:[
            {
                title:"Cabin shape",
                img:""
            },
            {
                title:"Glass detail",
                img:""
            },
            {
                title:"Finish and flooring",
                img:""
            },
            {
                title:"Control panel",
                img:""
            },
            {
                title:"Installed project (only if real)",
                img:""
            }

        ]

    },
    faq:
    {
      heading:"Frequently Asked Questions",
        questionsAndAns:[
           
        {
            question:"Is this elevator wheelchair accessible?",
            ans:"No. This model is not wheelchair accessible. Talk to NVANZ if you need an accessible option."
        },
        {
            question:"Is it MRL traction or hydraulic?",
            ans:"It depends on the project. The drive is chosen during planning, based on your site, speed needs and engineering."
        },
{
            question:"How fast does it travel?",
            ans:"Speed ranges from 0.15 to 0.63 m/s, depending on the drive."
        },
        {
            question:"How much weight can it carry?",
            ans:"Capacity ranges from 250 to 630 kg. The final figure depends on the project."
        },
        {
            question:"What space does it need?",
            ans:"Shaft size, pit depth and overhead height depend on your site. The NVANZ technical team confirms them after a site check."
        },
        {
            question:"Is it suitable for an existing home?",
            ans:"It may be, but only after a site assessment of the structure and layout."
        },
        ]
    },
    contact:{
        heading:"Planning a Panoramic Elevator for Your Home?",
        description:"Share your floor layout and design ideas with NVANZ. The team can help you understand whether this model fits your property and which drive suits your project.",
        btnText1:"Enquire About This Model",
        btnText2:"Discuss Your Requirements"
    }
    
  },
};
