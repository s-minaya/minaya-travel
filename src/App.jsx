import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import FAQSection from "./sections/FAQSection";
import FeaturedStays from "./sections/FeaturedStays";
import Home from "./sections/Home";
import Recommended from "./sections/Recommended";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <>
      <Navbar toggleDark={toggleDark} isDark={isDark} />

      <section className="h-screen w-full dark:bg-dark-bg">
        <Home />
        <Recommended />
        <FeaturedStays />
        <FAQSection />
        <Footer />
      </section>
      <TabBar toggleDark={toggleDark} isDark={isDark} />
    </>
  );
}

export default App;
