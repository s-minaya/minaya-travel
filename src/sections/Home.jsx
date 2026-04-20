function Home() {
  return (
    <div id="home">
      <div className="h-3/4 w-full">
        <div className="absolute flex h-full w-full flex-col items-center space-y-96 py-4">
          <input
            className="rounded-full p-3 shadow-sm outline-none"
            placeholder="Akihabara"
            type="search"
            name=""
            id=""
          />
          <button className="w-36 rounded-full bg-white p-4 font-potta-one text-xl font-semibold text-primary shadow-sm">
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
