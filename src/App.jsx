  import React from "react";
  import Navbar from "./components/Navbar";
  import LandingPage from "./components/LandingPage";
  import Marquee from "./components/Marquee";
  import About from "./components/About";
  import Eyes from "./components/Eyes";
  import Featured from "./components/Featured";
  import Cards from "./components/Cards";
  import Footer from "./components/Footer";
  import LocomotiveScroll from "locomotive-scroll";

  function App() {
    // This hook is great for desktop but can cause issues on mobile,
    // especially with touch events and performance.
    // It's often better to rely on native scrolling for mobile.
    // We can conditionally initialize it.
    React.useEffect(() => {
      if (window.innerWidth > 1024) { // Only initialize for larger screens
        const locomotiveScroll = new LocomotiveScroll();
      }
    }, []);

    return (
      <div className="w-full min-h-screen text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    );
  }

  export default App;
