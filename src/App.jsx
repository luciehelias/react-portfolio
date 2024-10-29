import About from "./assets/components/About";
import Experience from "./assets/components/Experience";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Technologies from "./assets/components/Technologies";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Future from "./assets/components/Future";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black-800 selection:bg-violet-100 selection:text-violet-800 relative">
      {/* En dessous il y a le background que je dois changer plus tard */}
      <div className="top-0 -z-10 size-full bg-white fixed ">
        <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>

      {/* fin du background */}
      <Header />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Future />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
