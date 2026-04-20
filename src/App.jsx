import "./App.css";

function App() {
  return (
    <>
      <nav></nav>
      <div id="tab_bar"></div>
      <section className="h-screen w-full">
        <div id="home">
          <div className="h-3/4 w-full">
            <div className="absolute flex h-full w-full flex-col items-center space-y-96 py-4">
              <input className="outline-none p-3 rounded-full shadow-sm" placeholder="Akihabara" type="search" name="" id="" />
              <button className="w-36 rounded-full text-xl font-semibold p-4 bg-white text-primary shadow-sm font-potta-one">Explorar</button>
            </div>
            <div className="h-full w-full">
              <img
                src="/img/fushimi-inari-taisha.jpg"
                alt="Imagen de Fushimi Inari Taisha"
              />
            </div>
          </div>
        </div>
        <div id="recommended"></div>
        <div id="featured_destinations"></div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
