import StackedCards, { Badge }  from "./StackedCards"


const cards = [
    {
        title: "Free site visit",
        text: "Our engineers visit your building, measure the shaft, and check1 the available space before preparing a quote, so the plan fits from day one.",
        badge: <Badge top="FREE" bottom="SITE VISIT" />,
    },
    {
        title: "Custom Design",
        text: "Design That Suits Your Space. You receive a clear design and a transparent quote. Choose cabin finishes, colours, and lighting that match your space.",
        badge: <Badge top="CUSTOM" bottom="DESIGN" />,
    },
    {
        title: "ISO 9001:2015",
        text: "Safe, High-Quality Elevators. We are ISO 9001:2015 certified. Our elevators combine Italian-inspired design, modern technology, a premium look, and superior comfort. Safety comes first, and every solution is personalised to your building.",
        badge: <Badge top="ISO" bottom="9001:2015" />,
    },
    {
        title: "Tested & Safe",
        text: "Installed and Tested. Our trained team installs your elevator and carries out complete safety and performance checks before handover.",
        badge: <Badge top="TESTED" bottom="& SAFE" />,
    },
    {
        title: "AMC Support",
        text: "Support After Handover. Our maintenance plans and quick service support keep your elevator running smoothly long after installation.",
        badge: <Badge top="AMC" bottom="SUPPORT" />,
    },
]

const WhyCustomerChoose = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#F8F4EA_0%,#EBDDBB_55%,#F8F4EA_100%)] py-[35px] sm:py-[45px] lg:py-[50px]">

      <div className="mx-auto w-[92%] sm:w-[90%]">

        {/* Heading */}
        <h2 className="font-bebas text-[46px] leading-[0.95] text-[#141210] sm:text-[58px] md:text-[70px] lg:text-[84px]">
          WHY CUSTOMERS CHOOSE NVANZ ELEVATORS
        </h2>

        {/* Description */}
        <p className="mt-[12px] max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#373128] sm:mt-[15px] sm:text-[15px] md:text-[16px] lg:mt-[10px] lg:text-[18px]">
          Buying an elevator is an important decision. Safety, service, and honest advice matter. Here is what you can expect from us:
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
