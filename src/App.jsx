import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import FeaturedDestinations from "./sections/FeaturedDestinations";
import Home from "./sections/Home";
import Recommended from "./sections/Recommended";

function App() {
  return (
    <>
      <Navbar />
      <TabBar />

      <section className="h-screen w-full">
        <Home />
        <Recommended />
        <FeaturedDestinations />
      </section>
      <Footer />
    </>
  );
}

export default App;
