import About from "./assets/components/About";
import Experience from "./assets/components/Experience";
import Hero from "./assets/components/Hero";
import Header from "./assets/components/Header";
import Technologies from "./assets/components/Technologies";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-800 antialiased selection:bg-violet-100 selection:text-violet-800 relative">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* En dessous il y a le background que je dois changer plus tard */}
        <div className="absolute top-0 -z-10 size-full bg-white ">
          <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
      </div>
      {/* fin du background */}
      <div className="container mx-auto px-8">
        <Header />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
