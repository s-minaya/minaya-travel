function Icon({ id, size = 24, className = "", type = "fill" }) {
  return (
    <svg
      width={size}
      height={size}
      fill={type === "fill" ? "currentColor" : "none"}
      stroke={type === "stroke" ? "currentColor" : "none"}
      className={className}
    >
      <use href={`/assets/sprite.svg#icon-${id}`} />
    </svg>
  );
}

export default Icon;