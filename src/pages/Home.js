import About from "../Components/About";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import ReadOnSite from "../Components/ReadOnSite";
//import Testing from "./components/Testing";
import Test from "../Components/Test";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center text-white bg-white dark:bg-zinc-800 bg-light-900 ">
      <Navbar />
      <div
        id="content"
        className="flex flex-col items-center space-y-24 mt-10 p-10"
      >
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-6xl text-black dark:text-white">
            Danganronpa v4{" "}
            <span className="animate-pulse text-8xl italic  p-2 rounded-xl text-blue-700">
              Home page.
            </span>
          </h1>
          <div id="divider" className="p-1 bg-black w-full rounded-xl"></div>
        </div>
        
        <Contact />
        <About />
        
      </div>
    </div>
  );
}

export default Home;