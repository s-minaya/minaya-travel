function Icon({ id, size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      stroke="none"
      className={className}
    >
      <use href={`/assets/sprite.svg#icon-${id}`} />
    </svg>
  );
}

export default Icon;