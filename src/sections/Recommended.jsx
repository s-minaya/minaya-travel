import { useRef } from "react";
import places from "../data/places";
import Icon from "../components/Icon";

function Recommended() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(".Card");
    if (!card) return;
    const cardWidth = card.offsetWidth + 24;
    el.scrollBy({
      left: dir === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6 dark:bg-dark-bg" id="recommended">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold text-primary">Recomendados</p>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-tertiary shadow-sm transition-all duration-300 hover:bg-primary hover:text-secondary dark:bg-dark-card dark:text-secondary dark:hover:bg-primary"
          >
            <Icon
              className="cursor-pointer"
              id="chevron-left"
              size={24}
              type="stroke"
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-tertiary shadow-sm transition-all duration-300 hover:bg-primary hover:text-secondary dark:bg-dark-card dark:text-secondary dark:hover:bg-primary"
          >
            <Icon
              className="cursor-pointer"
              id="chevron-right"
              size={24}
              type="stroke"
            />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scroll-hidden mt-6 flex h-72 w-auto snap-x snap-mandatory items-center space-x-6 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4 lg:h-84"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {places.map((place) => (
          <div key={place.id} className="Card">
            <div
              className="h-3/5 w-full rounded-t-lg bg-cover bg-center"
              style={{ backgroundImage: `var(${place.image})` }}
            />
            <div
              className={`h-2/5 w-full py-2 ${
                place.dark
                  ? "bg-tertiary dark:bg-dark-card-alt"
                  : "bg-secondary dark:bg-dark-card"
              }`}
            >
              <p
                className={`overflow-hidden px-4 font-bold whitespace-nowrap ${
                  place.longName ? "text-base" : "text-xl"
                } ${
                  place.dark
                    ? "text-secondary"
                    : "text-tertiary dark:text-secondary"
                }`}
              >
                {place.name}
              </p>
              <p className="px-4 font-potta-one text-primary">
                {place.japanese}
              </p>
              <p
                className={`text-md px-4 leading-tight ${
                  place.dark
                    ? "text-secondary"
                    : "text-tertiary dark:text-secondary/70"
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
