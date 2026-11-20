import StackedCards, { Badge }  from "./StackedCards"


const cards = [
    {
        title: "Free site visit",
        text: "Our engineers visit your building, measure the shaft and check the space before anything is quoted, so the plan fits from day one.",
        badge: <Badge top="FREE" bottom="SITE VISIT" />,
    },
    {
        title: "Design that fits your home",
        text: "You get a clear design and a transparent quote. Choose cabin finishes, colours and lighting that suit your space.",
        badge: <Badge top="CUSTOM" bottom="DESIGN" />,
    },
    {
        title: "Safe and quality lifts",
        text: "We are ISO 9001:2015 certified. Italian-inspired design, modern technology, a luxury and premium look, and superior comfort. Safety comes first, and every solution is personalised to your building.",
        badge: <Badge top="ISO" bottom="9001:2015" />,
    },
    {
        title: "Installed and tested",
        text: "Our trained team installs your lift and runs full safety and performance checks before handover.",
        badge: <Badge top="TESTED" bottom="& SAFE" />,
    },
    {
        title: "Support after handover",
        text: "Maintenance plans and quick service support keep your lift running smoothly long after installation.",
        badge: <Badge top="AMC" bottom="SUPPORT" />,
    },
]
const WhyCustomerChoose=()=>{

    return(
        <div className="bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[50px]">

                    <div className="mx-auto w-[90%] ">
                        <p className="text-[84px] font-bebas text-[#141210] ">WHY CUSTOMERS CHOOSE NVANZ ELEVATORS</p>
                        <p className="text-[18px] font-inter font-inter mt-[10px]">Buying a lift is a big decision. Safety, service, and honest advice matter. Here is what you can expect from us:</p>


  <StackedCards cards={cards} />
                        </div>

        </div>
    )
}

export default WhyCustomerChoose