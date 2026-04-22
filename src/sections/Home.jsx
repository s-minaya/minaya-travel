function Home() {
  return (
    <div id="home">
      <div className="h-3/4 w-full">
        <div className="absolute flex h-full w-full flex-col items-center space-y-96 py-4 lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start pointer-events-none ">
          <input
            className="pointer-events-auto rounded-full p-3 shadow-sm transition duration-300 outline-none focus-within:shadow-sm focus:w-11/12 focus:ring-2 lg:hidden"
            placeholder="Akihabara"
            type="search"
            name=""
            id=""
          />
          <div className="hidden h-auto lg:w-2/5 lg:flex pb-6">
          <p className="text-4xl ml-16 font-bold text-secondary" >Sigue explorando destinos similares</p></div>
          <button className="pointer-events-auto hover:scale:110 w-48 transform rounded-full bg-white p-4 text-lg font-semibold text-primary shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary hover:text-secondary lg:ml-16">
            Explorar
          </button>
        </div>
        <div className="h-full w-full lg:h-96 lg:bg-(image:--bg-image-fushimi-inari-taisha) lg:bg-cover lg:bg-center">
          <img className="lg:hidden"
            src="/img/fushimi-inari-taisha.jpg"
            alt="Imagen de Fushimi Inari Taisha"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
