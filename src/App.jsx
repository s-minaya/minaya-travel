import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import FAQSection from "./sections/FAQSection";
import FeaturedStays from "./sections/FeaturedStays";
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
        <FeaturedStays />
        <FAQSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
