import stays from "../data/stays";

function FeaturedStays() {
  return (
    <div className="w-full px-6" id="featured_destinations">
      <p className="mt-6 pb-8 text-3xl font-semibold text-primary">
        Descubre alojamientos
      </p>
      <div className="flex w-full flex-col items-center space-y-6">
        {stays.map((stay) => (
          <div
            key={stay.id}
            className="relative h-96 w-full shrink-0 overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ backgroundImage: `var(${stay.image})` }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className={`font-potta-one text-primary whitespace-nowrap ${
                stay.longName ? "text-4xl" : "text-5xl"
              }`}>{stay.japanese}</p>
              <p className="text-4xl font-bold text-white">{stay.name}</p>
              <p className="mt-1 text-sm text-white/80">{stay.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedStays;