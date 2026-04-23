function StayCard({ stay }) {
  return (
    <div
      className="relative h-96 w-full shrink-0 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
      style={{ backgroundImage: `var(${stay.image})` }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <p
          className={`font-potta-one whitespace-nowrap text-primary ${stay.longName ? "text-4xl" : "text-5xl"}`}
        >
          {stay.japanese}
        </p>
        <p className="text-4xl font-bold text-white">{stay.name}</p>
        <p className="mt-1 text-sm text-white/80">{stay.description}</p>
      </div>
    </div>
  );
}

export default StayCard;
