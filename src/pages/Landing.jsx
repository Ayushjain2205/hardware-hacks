import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Landing = () => {
  return (
    <div>
      <p className="text-6xl font-bold text-primary">Tag-Yo</p>
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/private_files/lf30_l0spvjyv.json"
        style={{ height: "300px", width: "100%" }}
      ></Player>
      <br />
      <span>
        Unlock the full potential of NFC tags with Tag-Yo - the ultimate tool
        for configuring{" "}
        <span className="font-bold italic text-primary">
          custom automations
        </span>{" "}
        and simplifying your daily routine.
      </span>
      <br />
      <button className="btn btn-wide btn-accent mt-2">Let's go</button>
    </div>
  );
};

export default Landing;
