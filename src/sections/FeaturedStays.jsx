import stays from "../data/stays";
import StayCard from "../components/StayCard";

function FeaturedStays() {
  return (
    <div className="w-full px-6 dark:bg-dark-bg" id="featured_destinations">
      <p className="mt-6 pb-8 text-3xl font-semibold text-primary">
        Descubre alojamientos
      </p>

      {/* Versión móvil */}
      <div className="flex w-full flex-col items-center space-y-6 lg:hidden">
        {stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>

      {/* Versión desktop — bento */}
      <div
        className="hidden lg:grid lg:grid-cols-3 lg:gap-4"
        style={{ gridTemplateRows: "300px 280px 280px" }}
      >
        <div
          className="relative col-span-3 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          style={{ backgroundImage: `var(${stays[0].image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="font-potta-one text-5xl text-primary">
              {stays[0].japanese}
            </p>
            <p className="text-4xl font-bold text-white">{stays[0].name}</p>
            <p className="mt-1 text-sm text-white/80">{stays[0].description}</p>
          </div>
        </div>

        <div
          className="relative col-span-1 row-span-2 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          style={{ backgroundImage: `var(${stays[1].image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p
              className={`font-potta-one whitespace-nowrap text-primary ${stays[1].longName ? "text-3xl" : "text-4xl"}`}
            >
              {stays[1].japanese}
            </p>
            <p className="text-3xl font-bold text-white">{stays[1].name}</p>
            <p className="mt-1 text-sm text-white/80">{stays[1].description}</p>
          </div>
        </div>

        <div
          className="relative col-span-2 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          style={{ backgroundImage: `var(${stays[2].image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p
              className={`font-potta-one whitespace-nowrap text-primary ${stays[2].longName ? "text-3xl" : "text-4xl"}`}
            >
              {stays[2].japanese}
            </p>
            <p className="text-3xl font-bold text-white">{stays[2].name}</p>
            <p className="mt-1 text-sm text-white/80">{stays[2].description}</p>
          </div>
        </div>

        <div
          className="relative col-span-2 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
          style={{ backgroundImage: `var(${stays[3].image})` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p
              className={`font-potta-one whitespace-nowrap text-primary ${stays[3].longName ? "text-3xl" : "text-4xl"}`}
            >
              {stays[3].japanese}
            </p>
            <p className="text-3xl font-bold text-white">{stays[3].name}</p>
            <p className="mt-1 text-sm text-white/80">{stays[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedStays;
