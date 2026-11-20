

const Button = ({
  text = "Click Me",
  onClick,
  type = "button",
  disabled = false,

  // Normal colors
  bgColor = "transparent",
  textColor = "#141210",

  // Hover colors
  hoverBgColor = "#E9A60F",
  hoverTextColor = "#141210",

  // Border
  borderColor = "#141210",
  borderWidth = "1.5px",
  borderRadius = "9999px",

  // Effects
  hoverEffect = true,
  expandEffect = false,
  expandColor = "rgba(0, 0, 0, 0.90)",
  expandScaleX = 1.20,
  expandScaleY = 1.50,
  expandDuration = "2s",

  // Additional Tailwind classes
  className = "",
}) => {
  return (
    <div className="relative inline-flex">

      {/* Expanding effect */}
      {expandEffect && (
        <span
          className="
            pointer-events-none absolute inset-0
            animate-button-expand
          "
          style={{
            backgroundColor: expandColor,
            borderRadius: borderRadius,
            "--expand-x": expandScaleX,
            "--expand-y": expandScaleY,
            "--expand-duration": expandDuration,
          }}
        />
      )}

      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          borderColor,
          borderWidth,
          borderRadius,
          "--hover-text": hoverTextColor,
        }}
        className={`
          group relative isolate inline-flex
          h-[56px] items-center justify-center
          overflow-hidden px-[40px] py-[5px]
          border-solid font-inter text-[16px] font-bold
          cursor-pointer transition-colors duration-500
          disabled:cursor-not-allowed disabled:opacity-50
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-4
          ${className}
        `}
      >
        {/* Hover background */}
        {hoverEffect && (
          <span
            className="
              pointer-events-none absolute inset-0 -z-10
              origin-bottom scale-y-0
              transition-transform duration-500 ease-out
              group-hover:scale-y-100
              motion-reduce:transition-none
            "
            style={{ backgroundColor: hoverBgColor }}
          />
        )}

        {/* Button text */}
        <span
          className={`
            relative z-10 transition-colors duration-500
            ${hoverEffect ? "group-hover:text-[var(--hover-text)]" : ""}
          `}
        >
          {text}
        </span>
      </button>
    </div>
  );
};

export default Button;
