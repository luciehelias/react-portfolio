import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-800 antialiased slec:bg-violet-300 selection:text-violet-800">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      {/* En dessous il y a le background que je dois changer plus tard */}
      <div className="absolute top-0 -z-10 size-full bg-white ">
        <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>
      {/* fin du background */}
      <div className="container mx-auto px-8">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
