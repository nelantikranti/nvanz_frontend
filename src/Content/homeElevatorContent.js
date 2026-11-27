import images from "../assets/Images";

export const homeElevatroContent=[
    {
        capselText:"TRACTION",
        accessible:'♿ Wheelchair accessible',
        title:"Signature 1101",
        no:"1101",
        subText:"",
        link:'/products/signature-1101',

        img:images?.signatureImg,
        alt:"Signature 1101 gearless traction home elevator",

    },
    {
        capselText:"MRL",
        accessible:'♿ Wheelchair accessible',
        title:"Prestige 1110",
        subText:"Rope · Flat belt · Grooved belt",
        no:"1110",
        options:[
            {
                option:'Rope',
                link:'/products/prestigeMrlRopeHome'
            },
            {
                option:'Flat belt',
                link:'/products/prestigeMrlFlatBelt'
            },
            {
                option:'Grooved belt',
                link:'/products/prestigeMrlGroovedBelt'
            },
          
        ],
        
        img:images?.prestige,
        alt:"Prestige 1110 MRL home elevator with no machine room",


    },
     {
        capselText:"HYDRAULIC",
        accessible:'♿ Wheelchair accessible',
        title:"Ground 1506",
        subText:"",
        no:"1506",
        link:'/products/groundHydraulicHome',
        img:images?.groundImg,
        alt: "Ground 1506 hydraulic elevator for low-rise homes",

    },
    {
        capselText:"PANORAMIC",
        accessible:'♿ Wheelchair accessible',
        title:"Panorama + Circular 1805",
        subText:"",
        no:"1805",
        link:'/products/nvanzPanorama-1805',
            img:images?.panoramaImg,
            alt: "Panorama 1805 360° panoramic circular glass elevator",

    },
    {
        capselText:"PANORAMIC",
        accessible:'',
        title:"Compact 1805",
        subText:"",
        no:"1805",
        link:'/products/compact360Panoramic',
         img:images?.compactImg,
      alt: "Compact 1805 360° panoramic elevator for small spaces",


    },
    {
        capselText:"COMBO / DESIGN OPTIONS",
        accessible:'',
        title:"Wheelchair",
        no:"",
        subText:"Combo / design options — details to be confirmed",
         options:[
            {
                option:'TRACTION',
                link:'/products/signature-1101'
            },
            {
                option:'HYDRAULIC',
                link:'/products/groundHydraulicHome'
            },
            {
                option:'PANORAMIC',
                link:'/products/nvanzPanorama-1805'
            },
          
        ]

    },
   
]