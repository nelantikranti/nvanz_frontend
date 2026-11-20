// import { useLayoutEffect, useRef, useState } from "react"
// import Button from "./Buttons/Button"


// const ContactCTASection=({ contact,
// })=>{
//   const sectionRef = useRef(null)
//   const animationFrameRef = useRef(null)
//   const [doorProgress, setDoorProgress] = useState(() =>
//     typeof window !== "undefined" &&
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches
//       ? 1
//       : 0
//   )

//   useLayoutEffect(() => {
//     const section = sectionRef.current
//     if (!section) return

//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       return
//     }

//     const updateDoorProgress = () => {
//       animationFrameRef.current = null
//       const bounds = section.getBoundingClientRect()
//       const viewportHeight = window.innerHeight
//       const visibleHeight = Math.max(
//         0,
//         Math.min(bounds.bottom, viewportHeight) - Math.max(bounds.top, 0)
//       )
//       const fullyVisibleHeight = Math.min(bounds.height, viewportHeight)
//       const progress = fullyVisibleHeight > 0
//         ? Math.min(visibleHeight / fullyVisibleHeight, 1)
//         : 0

//       setDoorProgress(progress)
//     }

//     const scheduleProgressUpdate = () => {
//       if (animationFrameRef.current === null) {
//         animationFrameRef.current = window.requestAnimationFrame(updateDoorProgress)
//       }
//     }

//     scheduleProgressUpdate()
//     window.addEventListener("scroll", scheduleProgressUpdate, { passive: true })
//     window.addEventListener("resize", scheduleProgressUpdate)
//     window.addEventListener("pageshow", scheduleProgressUpdate)
//     document.addEventListener("visibilitychange", scheduleProgressUpdate)

//     return () => {
//       window.removeEventListener("scroll", scheduleProgressUpdate)
//       window.removeEventListener("resize", scheduleProgressUpdate)
//       window.removeEventListener("pageshow", scheduleProgressUpdate)
//       document.removeEventListener("visibilitychange", scheduleProgressUpdate)
//       if (animationFrameRef.current !== null) {
//         window.cancelAnimationFrame(animationFrameRef.current)
//       }
//     }
//   }, [])

//   return (
//     <div
//       ref={sectionRef}
//       className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-[100px]"
//       style={{
//         background: "linear-gradient(180deg, #E9A60F 0%, #B8860B 100%)",
//       }}
//     >
//       {/* Background Animation */}
//       <div
//         className="pointer-events-none absolute inset-y-0 z-0 w-[480px] skew-x-[-20deg] animate-section-flash bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl motion-reduce:animate-none"
//         aria-hidden="true"
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         <p className="mx-auto w-[90%] text-center font-bebas text-[clamp(2.5rem,7vw,100px)] leading-[0.9] text-[#141210] sm:w-[85%] lg:w-[75%]">
//           {contact?.heading}
//         </p>

//         <p className="mx-auto mt-5 w-[90%] text-center font-inter text-base leading-relaxed text-[#141210] sm:mt-[30px] sm:text-lg lg:w-[50%] lg:text-[19px]">
//           {contact?.description}
//         </p>

//         {
//           contact?.description2 &&  <p className="mx-auto mt-[10px] w-[90%] text-center font-inter text-base leading-relaxed text-[#141210] sm:text-lg lg:w-[50%] lg:text-[19px]">
//           {contact?.description2}
//         </p>
//         }


// {
//   contact?.btnHeading && <p className="mx-auto mt-4 w-[90%] text-center font-inter text-base font-bold text-[#141210] sm:mt-[20px] sm:text-lg lg:text-[19px]">{contact?.btnHeading}</p>
// }
        

//         {/* Buttons */}
//         <div className="mx-auto mt-6 flex w-[90%] flex-col items-center justify-center gap-3 sm:mt-[30px] sm:flex-row sm:flex-wrap sm:gap-[20px]">
//           {contact?.btnText1 && (
//             <div className="w-full sm:w-auto">
//               <Button
//                 borderColor="#141210"
//                 bgColor="#141210"
//                 textColor="#FFFFFF"
//                 hoverBgColor="#FFFFFF"
//                 hoverTextColor="#141210"
//                 text={contact?.btnText1}
//                 expandEffect={true}
//                 className="w-full px-5 text-sm sm:w-auto sm:px-[40px] sm:text-base"
//               />
//             </div>
//           )}

//           {contact?.btnText2 && (
//             <div className="w-full sm:w-auto">
//               <Button
//                 text={contact?.btnText2}
//                 className="w-full px-5 text-sm sm:w-auto sm:px-[40px] sm:text-base"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
//         <div
//           className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
//           style={{
//             transform: `translate3d(-${doorProgress * 100}%, 0, 0)`,
//             backgroundColor: "#E9A60F",
//           }}
//         />
//         <div
//           className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
//           style={{
//             transform: `translate3d(${doorProgress * 100}%, 0, 0)`,
//             backgroundColor: "#E9A60F",
//           }}
//         />
//       </div>
      
//     </div>
 

//     )
// }

// export default ContactCTASection



import { useLayoutEffect, useRef, useState } from "react";
import Button from "./Buttons/Button";

const ContactCTASection = ({ contact }) => {
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [doorProgress, setDoorProgress] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let isActive = true;

    // Respect accessibility preferences
    if (mediaQuery.matches) {
      setDoorProgress(1);
      return;
    }

    // Calculate how much the doors should open
    const updateDoorProgress = () => {
      animationFrameRef.current = null;

      if (!isActive || !sectionRef.current) return;

      const bounds = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const travelDistance = Math.max(
        1,
        Math.min(bounds.height, viewportHeight)
      );

      // Start opening when the section enters the viewport.
      // Keep the doors open once the reveal is complete.
      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - bounds.top) / travelDistance
        )
      );

      setDoorProgress((previous) => {
        // Avoid unnecessary React re-renders
        return Math.abs(previous - progress) > 0.002
          ? progress
          : previous;
      });
    };

    // Schedule updates using requestAnimationFrame
    const scheduleProgressUpdate = () => {
      if (!isActive || animationFrameRef.current !== null) return;

      animationFrameRef.current =
        window.requestAnimationFrame(updateDoorProgress);
    };

    // Initial calculation after page rendering
    scheduleProgressUpdate();

    // Handle browser scroll and layout changes
    window.addEventListener(
      "scroll",
      scheduleProgressUpdate,
      { passive: true }
    );

    window.addEventListener("resize", scheduleProgressUpdate);
    window.addEventListener("pageshow", scheduleProgressUpdate);
    window.addEventListener("load", scheduleProgressUpdate);

    document.addEventListener(
      "visibilitychange",
      scheduleProgressUpdate
    );

    // Observe section and document layout changes
    const resizeObserver = new ResizeObserver(
      scheduleProgressUpdate
    );

    resizeObserver.observe(section);
    resizeObserver.observe(document.documentElement);

    // Recalculate after fonts finish loading
    document.fonts?.ready.then(() => {
      if (isActive) scheduleProgressUpdate();
    });

    return () => {
      isActive = false;

      window.removeEventListener(
        "scroll",
        scheduleProgressUpdate
      );

      window.removeEventListener("resize", scheduleProgressUpdate);
      window.removeEventListener("pageshow", scheduleProgressUpdate);
      window.removeEventListener("load", scheduleProgressUpdate);

      document.removeEventListener(
        "visibilitychange",
        scheduleProgressUpdate
      );

      resizeObserver.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-[100px]"
      style={{
        background: "linear-gradient(180deg, #E9A60F 0%, #B8860B 100%)",
      }}
    >
      {/* Background Animation */}
      <div
        className="pointer-events-none absolute inset-y-0 z-0 w-[480px] skew-x-[-20deg] animate-section-flash bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl motion-reduce:animate-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        <p className="mx-auto w-[90%] text-center font-bebas text-[clamp(2.5rem,7vw,100px)] leading-[0.9] text-[#141210] sm:w-[85%] lg:w-[75%]">
          {contact?.heading}
        </p>

        <p className="mx-auto mt-5 w-[90%] text-center font-inter text-base leading-relaxed text-[#141210] sm:mt-[30px] sm:text-lg lg:w-[50%] lg:text-[19px]">
          {contact?.description}
        </p>

        {contact?.description2 && (
          <p className="mx-auto mt-[10px] w-[90%] text-center font-inter text-base leading-relaxed text-[#141210] sm:text-lg lg:w-[50%] lg:text-[19px]">
            {contact?.description2}
          </p>
        )}

        {contact?.btnHeading && (
          <p className="mx-auto mt-4 w-[90%] text-center font-inter text-base font-bold text-[#141210] sm:mt-[20px] sm:text-lg lg:text-[19px]">
            {contact?.btnHeading}
          </p>
        )}

        {/* Buttons */}
        <div className="mx-auto mt-6 flex w-[90%] flex-col items-center justify-center gap-3 sm:mt-[30px] sm:flex-row sm:flex-wrap sm:gap-[20px]">
          {contact?.btnText1 && (
            <div className="w-full sm:w-auto">
              <Button
                borderColor="#141210"
                bgColor="#141210"
                textColor="#FFFFFF"
                hoverBgColor="#FFFFFF"
                hoverTextColor="#141210"
                text={contact?.btnText1}
                expandEffect={true}
                className="w-full px-5 text-sm sm:w-auto sm:px-[40px] sm:text-base"
              />
            </div>
          )}

          {contact?.btnText2 && (
            <div className="w-full sm:w-auto">
              <Button
                text={contact?.btnText2}
                onClick={() => {
        window.location.href = "tel:+918978039911";
    }}
                className="w-full px-5 text-sm sm:w-auto sm:px-[40px] sm:text-base"
              />
            </div>
          )}
        </div>
      </div>

      {/* Door Opening Animation */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        aria-hidden="true"
      >
        {/* Left Door */}
        <div
          className="absolute inset-y-0 left-0 w-1/2"
          style={{
            transform: `translate3d(-${doorProgress * 100}%, 0, 0)`,
            backgroundColor: "#E9A60F",
            willChange: "transform",
          }}
        />

        {/* Right Door */}
        <div
          className="absolute inset-y-0 right-0 w-1/2"
          style={{
            transform: `translate3d(${doorProgress * 100}%, 0, 0)`,
            backgroundColor: "#E9A60F",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
};

export default ContactCTASection;
