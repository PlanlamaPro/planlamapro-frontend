import React from "react";
import Developer from "../components/developer";

function About() {
  const developer = [
    {
      name: "Erdal Nayir",
      url: "https://avatars.githubusercontent.com/u/76615367?v=4",
    },
    {
      name: "Mert Büyükaksoy",
      url: "https://media.licdn.com/dms/image/D4D03AQElAUJ4eFgkKA/profile-displayphoto-shrink_400_400/0/1676285725410?e=1691625600&v=beta&t=15pJ8n81rP0RozGi1lzvwMXg7xE0qiNK-i78E2ii4hI",
    },
    {
      name: "Eda Dural",
      url: require("../images/logo.png"),
    },
    {
      name: "Ahmet Yıldırım",
      url: "https://avatars.githubusercontent.com/u/76650271?v=4",
    },
    {
      name: "Mustafa Erhan Portakal",
      url: "https://avatars.githubusercontent.com/u/73031908?v=4",
    },
  ];

  return (
    <div className="flex- flex-col h-screen overflow-hidden  items-center">
      <h1 className="font-bold text-center mt-8 mb-4 text-4xl ">
        Geliştiriciler
      </h1>
      <div className="flex gap-x-4  flex-row justify-center items-center ">
        {developer.map((dev) => {
          return <Developer data={dev}></Developer>;
        })}
      </div>
    </div>
  );
}

export default About;
