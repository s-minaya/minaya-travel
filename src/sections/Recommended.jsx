import places from "../data/places";

function Recommended() {
  return (
    <div className="p-6" id="recommended">
      <p className="font-nunito text-3xl font-semibold text-primary">
        Recomendados
      </p>
      <div className="mt-6 flex h-72 w-auto items-center space-x-6 overflow-x-auto overscroll-x-contain">
        {places.map((place) => (
          <div key={place.id} className="Card">
            <div
              className="h-3/5 w-full rounded-t-lg bg-cover"
              style={{ backgroundImage: `var(${place.image})` }}
            />
            <div
              className={`h-2/5 w-full py-2 ${
                place.dark ? "bg-tertiary" : "bg-secondary"
              }`}
            >
              <p
                className={`overflow-hidden px-4 font-nunito font-bold whitespace-nowrap ${
                  place.longName ? "text-base" : "text-xl"
                } ${place.dark ? "text-secondary" : "text-tertiary"}`}
              >
                {place.name}
              </p>
              <p className="px-4 font-potta-one text-primary">
                {place.japanese}
              </p>
              <p
                className={`text-md px-4 font-nunito leading-tight ${
                  place.dark ? "text-secondary" : "text-tertiary"
                }`}
              >
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
