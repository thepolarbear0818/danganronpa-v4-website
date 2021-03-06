import React from "react";

const Contact = () => {
  const sections = [
    {
      name: "Main Document!",
      content:
        "Placeholder Text",
    },
    {
      name: "Game",
      content:
        "Placeholder text",
    },

    {

      name: "Discord Server",
      content:
        "Placeholder text HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-6xl dark:text-white text-black">Read it here!</h1>
      <div className="flex flex-col items-center container space-y-2">
        {sections.map((item) => {
          return (
            <div className="w-full shadow-xl  bg-blue-700 flex flex-col items-start space-y-4 text-white rounded-xl px-4 py-8  shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;