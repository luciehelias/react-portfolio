import About from "./assets/components/sections/About";
import Contact from "./assets/components/sections/Contact";
import Experience from "./assets/components/sections/Experience";
import Footer from "./assets/components/sections/Footer";
import Header from "./assets/components/sections/Header";
import Hero from "./assets/components/sections/Hero";
import Pride from "./assets/components/sections/Pride";
import Projects from "./assets/components/sections/Projects";
import Objective from "./assets/components/sections/Objective";
import Technologies from "./assets/components/sections/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black-800 selection:bg-violet-100 selection:text-violet-800 relative">
      <div className="top-0 -z-10 size-full bg-white fixed ">
        <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>
      <Header />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Objective />
        <Technologies />
        <Projects />
        <Experience />
        <Pride />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
