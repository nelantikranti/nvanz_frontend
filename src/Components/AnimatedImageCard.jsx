



const AnimatedImageCard = ({
  src,
  alt = "Image",
  width = "320px",
  height = "480px",
  borderRadius = "10px",
  borderWidth = "2px",
  borderColor = "#E9A60F",
  shadow = "0_12px_36px_rgba(233,166,15,0.16)",
  objectFit = "cover",
  floatAnimation = true,
  flashAnimation = true,
  className = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={`
        group relative overflow-hidden
        border
        ${floatAnimation ? "animate-elevator-float motion-reduce:animate-none" : ""}
        ${className}
      `}
      style={{
        width,
        height,
        borderRadius,
        borderWidth,
        borderColor,
        boxShadow: shadow.replaceAll("_", " "),
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${imageClassName}`}
        style={{ objectFit }}
      />

      {flashAnimation && (
        <span
          className="
            pointer-events-none absolute inset-y-0
            left-[-70%] z-10 w-[70%]
            skew-x-[-18deg]
            animate-image-flash
            bg-gradient-to-r from-transparent
            via-white/30 to-transparent
            blur-md motion-reduce:animate-none
          "
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default AnimatedImageCard;
