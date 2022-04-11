//import About from "./components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
//import Testing from "./components/Testing";

function App() {
  return (
    <div className="flex flex-col items-center text-white bg-white bg-light-900">
      <Navbar />
      <div
        id="content"
        className="flex flex-col items-center space-y-24 mt-10 p-10"
      >
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-6xl text-black">
            Danganronpa v4{" "}
            <span className="animate-pulse text-8xl italic  p-2 rounded-xl text-orange-500">
              Home page.
            </span>
          </h1>
          <div id="divider" className="p-1 bg-black w-full rounded-xl"></div>
        </div>
        
        <Contact />
        
      </div>
    </div>
  );
}

export default App;