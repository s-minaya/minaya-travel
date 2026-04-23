function Home() {
  return (
    <div id="home" className="lg:mt-16">
      <div className="relative h-3/4 w-full lg:h-[70vh]">
        <div className="pointer-events-none absolute flex h-full w-full flex-col items-center justify-between py-8 lg:items-start lg:justify-end lg:pb-16">
          <input
            className="pointer-events-auto rounded-full p-3 shadow-sm transition duration-300 outline-none focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
            placeholder="Akihabara"
            type="search"
            name=""
            id=""
          />
          <div className="hidden h-auto pb-6 lg:flex lg:w-2/5">
            <p className="ml-16 text-4xl font-bold text-secondary">
              Sigue explorando destinos similares
            </p>
          </div>
          <button className="cursor-pointer pointer-events-auto w-48 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary hover:text-secondary lg:ml-16">
            Explorar
          </button>
        </div>
        <div className="h-full w-full lg:bg-(image:--bg-image-fushimi-inari-taisha) lg:bg-cover lg:bg-center">
          <img
            className="lg:hidden"
            src="/img/fushimi-inari-taisha.jpg"
            alt="Imagen de Fushimi Inari Taisha"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
