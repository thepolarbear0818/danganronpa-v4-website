import React from "react";

const About = () => {
  const sections = [
    {
      name: "Home Page",
      content:
        "Placeholder Text",
    },
    {
      name: "Our Mission",
      content:
        "Placeholder Text",
    },
    {
      name: "Charecters",
      content: "Placeholder Test HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
    }
  ];

  return (
    <div id="about" className="flex flex-col items-start space-y-6">
      <h1 className="text-6xl text-black items-start px-4 py-8 w-full flex flex-col items-center">About</h1>
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className="border-2 border-white w-full flex flex-col items-start space-y-4 bg-orange-500 text-black rounded-xl px-4 py-8  shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;