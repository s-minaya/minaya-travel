function Home() {
  return (
    <div id="home">
      <div className="h-3/4 w-full">
        <div className="absolute flex h-full w-full flex-col items-center space-y-96 py-4">
          <input
            className="rounded-full p-3 shadow-sm outline-none transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12"
            placeholder="Akihabara"
            type="search"
            name=""
            id=""
          />
          <button className="hover:scale:110 w-48 transform rounded-full text-lg bg-white p-4 font-semibold text-primary shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-primary hover:text-secondary">
            Explorar
          </button>
        </div>
        <div className="h-full w-full">
          <img
            src="/img/fushimi-inari-taisha.jpg"
            alt="Imagen de Fushimi Inari Taisha"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
