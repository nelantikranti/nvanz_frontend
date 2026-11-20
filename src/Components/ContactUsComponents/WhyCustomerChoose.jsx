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

const WhyCustomerChoose = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[35px] sm:py-[45px] lg:py-[50px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Heading */}
        <p className="font-bebas text-[46px] leading-[0.95] text-[#141210] sm:text-[58px] md:text-[70px] lg:text-[84px]">
          WHY CUSTOMERS CHOOSE NVANZ ELEVATORS
        </p>

        {/* Description */}
        <p className="mt-[12px] max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#373128] sm:mt-[15px] sm:text-[15px] md:text-[16px] lg:mt-[10px] lg:text-[18px]">
          Buying a lift is a big decision. Safety, service, and honest advice
          matter. Here is what you can expect from us:
        </p>

        {/* Stacked Cards */}
        <div className="mt-[25px] sm:mt-[30px] lg:mt-[35px]">
          <StackedCards cards={cards} />
        </div>

      </div>

    </section>
  );
};

export default WhyCustomerChoose;
