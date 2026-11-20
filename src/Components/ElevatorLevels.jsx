


const elevatorLevels = [
  { height: "h-[88px]", floors: 5 },
  { height: "h-[116px]", floors: 6 },
  { height: "h-[172px]", floors: 8 },
];

const ElevatorAnimation = () => {
  return (
    <div className="relative flex h-[190px] items-end justify-center gap-2 w-full">

      {elevatorLevels.map((elevator, index) => (
        <div
          key={index}
          className={`
            flex ${elevator.height} w-[42px]
            flex-col-reverse justify-between gap-[4px]
            rounded-t-[5px] border border-[#E9A60F]
            bg-[#17140F] p-[4px]
          `}
        >
          {Array.from({ length: elevator.floors }).map((_, floorIndex) => (
            <div
              key={floorIndex}
              className="elevator-light h-[12px] w-full shrink-0 rounded-[3px]"
              style={{
                animationDelay: `${-(
                  (elevator.floors - 1 - floorIndex) * 0.22 +
                  index * 0.35
                )}s`,
              }}
            />
          ))}
        </div>
      ))}

    </div>
  );
};

export default ElevatorAnimation;
