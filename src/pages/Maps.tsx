import React, { useState } from "react";

import maps from "../assets/map.png";
import searchIcon from "../assets/search.png";

import "./maps.css";
import Keyboard from "../components/keyboard";

const Maps: React.FC = () => {
  const [isTypingDest, setIsTypingDest] = useState<boolean>(true);
  const [destination, setDestination] = useState<string>("");

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const closestTeslaTextField = target.closest(".tesla-text-field");
    const closestKeyboard = target.closest("#keyboard");

    if (!closestTeslaTextField && !closestKeyboard) {
      setIsTypingDest(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleKeyClick = (str: string) => {
    console.log(str);
    switch (str) {
      case "BACKSPACE":
        setDestination(destination.slice(0, -1));
        break;
      case "SPACE":
        setDestination((d) => `${d} `);
        break;
      default:
        setDestination(destination + str);
        break;
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div id="maps-border" className="h-[85px] bg-white" />
      <div className="absolute w-full h-full cover">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12430.618419150835!2d-77.27499585!3d38.84037034999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1733876273969!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <img src={maps} className="-z-[1] absolute w-full h-full cover" /> */}
      <div
        className="
				absolute top-[135px] left-[50px] bg-[rgb(246,246,246,95%)] rounded-lg 
				w-[450px] h-[100px] shadow-lg flex flex-row gap-4 items-center
				text-[#454545] text-2xl
			"
      >
        <img src={searchIcon} className="ml-4" />
        <input
          type="text"
          className="tesla-text-field relative cursor-text outline-none bg-transparent"
          placeholder="Navigate"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() => setIsTypingDest(true)}
        />
      </div>
      <div
        className="
				absolute bottom-[100px] left-0 w-[calc(100%-360px)] overflow-hidden
				transition-[max-height] duration-[350ms]
			"
        style={{
          maxHeight: isTypingDest ? "1000px" : "0px",
        }}
      >
        <Keyboard onClickKey={handleKeyClick} />
      </div>
    </div>
  );
};

export default Maps;
